import DayPickerView from '@/components/courses-tab/day-picker';
import { sagaActions } from '@/components/sagaActions';
import { setDescriptionNewCourses } from '@/components/store/store';
import { TextEditor } from '@/components/text-editor';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { change, Field, FieldArray, reduxForm } from 'redux-form';
import { Form, Grid, Segment } from 'semantic-ui-react';

let Seminars = () => {
	const types_of_work = [
		{
			text: 'Групповая',
			value: 'group',
			key: 'group',
		},
		{
			text: 'Индивидуальный',
			value:'individual',
			key: 'individual',
		},
		{
			text: 'Другое',
			value: 'other',
			key: 'other',
		}
	]
	const dispatch = useDispatch();
	const trainers = useSelector(state => Object.values(state.main.trainers).map(
		(trainer) => {
			return {
				text: `${trainer.surname} ${trainer.name}`,
				value: trainer.id,
				key: trainer.id,
			};
		}));
	const [newCity, setNewCity] = useState('');
	const handleAddNewCity = () => {
		if (newCity) {
			dispatch({ type: sagaActions.CREATE_CITY, newCity: newCity });
			setNewCity('');
		}
	};
	const cities = useSelector(state => Object.entries(state.main.cities).map(
		([id, city]) => {
			return {
				text: city,
				value: id,
				key: id,
			};
		}));
	const textEditorValue = useSelector(state => state.main.descriptionNewCourses)
	const handleChangeText = description => {
		dispatch(setDescriptionNewCourses(description))
	};
	return <div>
		<Form className="general" data-testid="general-editor">
			<Grid>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<Segment>
							<Field
								name="title"
								type="text"
								component={FormInputField}
								dark
								label="Заголовок мероприятия"
								autoComplete="off"
								placeholder=""
							/>
						</Segment>
						<Segment>
							<Field
								name="main_trainer"
								type="text"
								component={FormSelectField}
								dark
								label="Основной тренер"
								autoComplete="off"
								placeholder="Основной тренер"
								options={trainers}
							/>
						</Segment>
						<Segment>
							<Field
								name="organizer"
								type="text"
								component={FormInputField}
								dark
								label="Организатор"
								autoComplete="off"
								placeholder="Организатор"
							/>
						</Segment>
						<Segment>
							<Field
								name="organizer_contacts"
								type="text"
								component={FormInputField}
								dark
								label="Контакты организатора"
								autoComplete="off"
								placeholder=""
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<Segment>
							<Field component={TextEditor} name="description" label="Описание" textEditorValue={textEditorValue} handleChangeText={handleChangeText} />
						</Segment>
						<Segment>
							<Field
								name="city"
								type="text"
								component={FormSelectField}
								dark
								label="Город"
								autoComplete="off"
								placeholder="Город"
								options={cities}
							/>
							<div>
								Добавить город, если нет в списке
								<input type="text" name="newCity" value={newCity}
								       onInput={(e) => setNewCity(e.target.value)} />
								<button onClick={handleAddNewCity}>Добавить город</button>
							</div>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='seminars_datapicker'>
						Даты мероприятия
						<Field
							name={`dates`}
							type="dates"
							component={DayPickerView}
							dark
							label="Даты мероприятия"
							autoComplete="off"
						/>
					</div>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
					<Field
						name="type_of_work"
						type="text"
						component={FormSelectField}
						dark
						label="Тип семинара"
						placeholder="Тип семинара"
						options={types_of_work}
					/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Form>
	</div>;
};


Seminars = reduxForm({
	form: 'seminar',
})(Seminars);

Seminars = connect(
	state => ({
		initialValues: state.main.activeCourse || {
			main_trainer: state?.main?.user?.id || '',
			type_of_work: 'group',
		}, // pull initial values from account reducer
	}),
	{ load: true }, // bind account loading action creator
)(Seminars);

export default Seminars;