'use client';
import { NewsPhoto } from '@/components/news-photo';
import { sagaActions } from '@/components/sagaActions';
import { setAboutText, setEditableUser } from '@/components/store/store';
import { TextEditor } from '@/components/text-editor';
import FormCheckbox from '@/semantic-ui/components/form-checkbox';
import { FormCheckboxField } from '@/semantic-ui/components/form-checkbox-field';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import React, { useEffect, useMemo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { change, Field, reduxForm, reset } from 'redux-form';
import { put } from 'redux-saga/effects';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import './style.scss';


let UserTab = () => {
	const dispatch = useDispatch();
	const cities = useSelector(state => Object.entries(state.main.cities).map(
		([id, city]) => {
		return {
			text: city,
			value: id,
			key: id,
		}
	}));
	const form = useSelector(state => state.form.user)

	const textEditorValue = useSelector(state => state.main.mainAboutText);

	useEffect(() => {
		if (!cities.length){
			dispatch({ type: sagaActions.GET_CITIES });
		}
	}, []);

	const handleNewsPhotoChange = ({ target: { files } }) => {
		dispatch({ type: sagaActions.UPLOAD_FILE, file: files[0] });
	};

	const [newCity, setNewCity] = useState('');

	const handleDeleteFile = () => {
		change('about', 'avatar', '', true, {});
	};
	const handleSaveChanges = () => {
		dispatch({ type: sagaActions.UPDATE_TRAINER });
	};
	const handleDelete = () => {
		dispatch({ type: sagaActions.DELETE_TRAINER });
	};

	const handleAddNewCity = () =>{
		if (newCity){
			dispatch({ type: sagaActions.CREATE_CITY, newCity: newCity });
			setNewCity('')
		}
	}
	const matchInput = () =>{
		if (!form?.values?.password || !form?.values?.password_repeat){
			return
		}
		return form?.values?.password === form.values?.password_repeat ? undefined : 'Пароль не совпадает';
	}

	const handleChangeText = value => {
		dispatch(setAboutText(value))
	};

	const trainersFromState = useSelector(state => state.main.trainers);
	const trainers = useMemo(() => {
		return Object.values(trainersFromState).map(trainer =>({
			id: trainer.id,
			name: `${trainer.surname} ${trainer.name} ${trainer.second_name}`
		}))
	}, [trainersFromState] );

	const handleSelectUser = (e) => {
		change('user', 'name', 123, true)
		if (trainersFromState[e.target.value]){
			Object.entries(trainersFromState[e.target.value]).forEach(([key, val]) =>{
				dispatch(change('user', key, val, true))
				if(key=== 'description'){
					dispatch(setAboutText(val))
				}
			})
		} else {
			dispatch(reset('user'))
			dispatch(setAboutText(''))
		}


	}
	return (
		<div>
			<Form className="general" data-testid="general-editor">
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<select onChange={handleSelectUser}>
								<option key={'new'} value={''}>Новый тренер</option>
								{trainers.map(trainer =>{
									return <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
								})}
							</select>
						</Grid.Column>

						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Segment>
								<Field
									name="name"
									type="text"
									component={FormInputField}
									dark
									label="Имя*"
									autoComplete="off"
									placeholder="Имя"
								/>
							</Segment>
							<Segment>
								<Field
									name="second_name"
									type="text"
									component={FormInputField}
									dark
									label="Отчество"
									autoComplete="off"
									placeholder="Отчество"
								/>
							</Segment>
							<Segment>
								<Field
									name="surname"
									type="text"
									component={FormInputField}
									dark
									label="Фамилия*"
									autoComplete="off"
									placeholder="Фамилия"
								/>
							</Segment>
							<Segment>
								<Field
									name="master"
									type="checkbox"
									component={FormCheckboxField}
									dark
									label="Это тренер?"
								/>
							</Segment>
							<Segment>
								<Field
									name="superUser"
									type="checkbox"
									component={FormCheckboxField}
									dark
									label="Супер-юзер?"
								/>
							</Segment>
							<Segment>
								<Field
									name="ethicalCommittee"
									type="checkbox"
									component={FormCheckboxField}
									dark
									label="Состоит в этическом комитете?"
								/>
							</Segment>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Segment>
								<Field
									name="phone"
									type="text"
									component={FormInputField}
									dark
									label="Телефон"
									autoComplete="off"
									placeholder="Телефон"
								/>
							</Segment>
							<Segment>
								<Field
									name="email"
									type="text"
									component={FormInputField}
									dark
									label="Email*"
									autoComplete="off"
									placeholder="Email"
								/>
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
									<input type="text" name="newCity" value={newCity} onInput={(e)=>setNewCity(e.target.value)}/>
									<button onClick={handleAddNewCity}>Добавить город</button>
								</div>
							</Segment>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Segment>
								<Field
									name="password"
									type="text"
									component={FormInputField}
									dark
									label="Новый пароль, если хочешь поменять."
									autoComplete="off"
									placeholder="Новый пароль, если хочешь поменять."
								/>
							</Segment>
							<Segment>
								<Field
									name="password_repeat"
									type="text"
									component={FormInputField}
									dark
									label="Повторить новый пароль"
									autoComplete="off"
									placeholder="Повторить новый пароль"
									meta={{
										error: matchInput(),
										touched: true,
									}}

								/>
							</Segment>
							<Segment>
								<Button
									onClick={handleSaveChanges}
									className="new-news-tag__btn"
									primary
									data-testid="new-news-tag__btn"
								>
									Сохранить изменения
								</Button>
							</Segment>
							<Segment>
								<Button
									onClick={handleDelete}
									className="new-news-tag__btn"
									primary
									data-testid="new-news-tag__btn"
								>
									Удалить пользователя
								</Button>
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Field component={TextEditor} name="description" label="О себе" textEditorValue={textEditorValue} handleChangeText={handleChangeText}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</div>

	);
};

UserTab = reduxForm({
	form: 'user',
})(UserTab);

UserTab = connect(
	state => ({
		initialValues: state.main.user,
	}),
	{},
)(UserTab);

export default UserTab;