'use client';
import { NewsPhoto } from '@/components/news-photo';
import { sagaActions } from '@/components/sagaActions';
import { setAboutText } from '@/components/store/store';
import { TextEditor } from '@/components/text-editor';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import './style.scss';


let AboutTab = () => {
	const dispatch = useDispatch();
	const cities = useSelector(state => Object.entries(state.main.cities).map(
		([id, city]) => {
		return {
			text: city,
			value: id,
			key: id,
		}
	}));
	const form = useSelector(state => state.form.about)

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
		change('about', 'avatar', '', true,{});
	};
	const handleSaveChanges = () => {
		dispatch({ type: sagaActions.UPDATE_TRAINER });
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


	return (
		<div>
			<Form className="general" data-testid="general-editor">
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Field
								name="avatar"
								type="file"
								component={NewsPhoto}
								onSetPhotoChange={handleNewsPhotoChange}
								onDeleteFile={handleDeleteFile}
							/>

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

AboutTab = reduxForm({
	form: 'about',
})(AboutTab);

AboutTab = connect(
	state => ({
		initialValues: state.main.user, // pull initial values from account reducer
	}),
	{},
)(AboutTab);

export default AboutTab;