'use client';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import { useEffect, useState } from 'react';
import TypesOfCourses from '@/components/typesOfCourses'
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';



const CoursesWrapper = () => {
	const [type, setType] = useState('base');
	const [trainer, setTrainer] = useState('test_uuid');
	const [trainers, setTrainers] = useState([]);

	useEffect(() => {

		async function getTrainers() {
			const res ={
				ok: true,
				items: [{
					value: 'test_uuid',
					name: 'test_name',
				}, {
					value: 'test_uuid1',
					name: 'test_name1',
				}, {
					value: 'test_uuid2',
					name: 'test_name2',
				}, {
					value: 'test_uuid3',
					name: 'test_name3',
				}]
			} ;
			// The return value is *not* serialized
			// You can return Date, Map, Set, etc.

			// Recommendation: handle errors
			if (!res.ok) {
				// This will activate the closest `error.js` Error Boundary
				throw new Error('Failed to fetch data');
			} else {
				setTrainers(res.items)
			}
		}

		getTrainers()
	}, []);

	const handleChangeType = ({
		                          target: {
			                          value,
		                          },
	                          }) => {
		setType(value);
	};
	const handleChangeMainTrainer = ({
		                                 target: {
			                                 value,
		                                 },
	                                 }) => {

		setTrainer(value);
	};


	console.log('rerender');
	return (
		<Form>
			<div className="people-edit">
				<div>
					<Field
						name="title"
						type="text"
						component={<Field
							name="user_uuid"
							type="text"
							component={FormSelectField}
							dark
							label="Тип мероприятия"
							autoComplete="off"
							placeholder=""
							options={[
								{
									key: 'base',
									value: 'base',
									text: 'Обучение ППТ Базовый курс'
								},{
									key: 'master',
									value: 'master',
									text: 'Обучение ППТ Мастер курс'
								},{
									key: 'specialization',
									value: 'specialization',
									text: 'Специализации'
								},{
									key: 'seminar',
									value: 'seminar',
									text: 'Семинар'
								},{
									key: 'conference',
									value: 'conference',
									text: 'Конференция'
								},
							]}
							search
							noResultsMessage="Не найдено"
						/>}
						dark
						label="Заголовок"
						autoComplete="off"
						placeholder=""
					/>
					{/*<select name="course_type" id="course_type" onChange={handleChangeType} value={type}>
						<option value="base">

						</option>
						<option value="master">
							Обучение ППТ Мастер курс
						</option>
						<option value="specialization">
							Специализации
						</option>
						<option value="seminar">
							Семинар
						</option>
						<option value="conference">
							Конференция
						</option>
					</select>*/}
				</div>
				<TypesOfCourses type={type} trainer={trainer} trainers={trainers} onChangeMainTrainer={handleChangeMainTrainer}/>
			</div>
		</Form>
		
	);
};

const CoursesWrapperPageWrapper = reduxForm({
	form: 'courses',
	enableReinitialize: true,
})(CoursesWrapper);

const mapStateToProps = createStructuredSelector({})
const mapDispatchToProps = {}

const Courses = connect(mapStateToProps, mapDispatchToProps)(CoursesWrapperPageWrapper);

export default Courses;