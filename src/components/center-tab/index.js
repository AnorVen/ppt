'use client';
import { sagaActions } from '@/components/sagaActions';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import React, { useMemo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { change, Field, reduxForm, reset } from 'redux-form';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import './style.scss';


let CenterTab = () => {
	const dispatch = useDispatch();
	const cities = useSelector(state => state.main.cities);
	console.log(cities);
	const citiesOptions = Object.entries(cities).map(
		([_id, title]) => {
			return {
				text: title,
				value: _id,
				key: _id,
			};
		});
	const form = useSelector(state => state.form.center);
	const centersFromState = useSelector(state => state.main.centers);
	console.log('centersFromState', centersFromState);
	const centersOption = useMemo(()=> {

		return [{
			text: 'Новый центр',
			value: 'new',
			key: 'new',
		}].concat(Object.values(centersFromState).map(({ _id, title }) => {
			return {
				text: title,
				value: _id,
				key: _id,
			};
		}).sort((a, b)=> a.text - b.text));
	}, [centersFromState])
	console.log('centersOption', centersOption);
	const [newCity, setNewCity] = useState('');

	const handleSaveChanges = () => {
		dispatch({ type: sagaActions.UPDATE_CENTER });
		dispatch(reset('center'));
	};

	const handleDeleteCenter = () => {
		dispatch({ type: sagaActions.DELETE_CENTER });
		dispatch(reset('center'));
	};

	const handleAddNewCity = () => {
		if (newCity) {
			dispatch({ type: sagaActions.CREATE_CITY, newCity: newCity });
			setNewCity('');
		}
	};
	const handleSelectCenter = (value) => {
		console.log(centersFromState);
		console.log(value);
		if (centersFromState[value]) {
			Object.entries(centersFromState[value]).forEach(([key, val]) => {
				dispatch(change('center', key, val, true));
			});
		} else {
			dispatch(reset('center'));
		}
	};


	return (
		<div>
			<Form className="general" data-testid="general-editor">
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={4}>

							<Field
								name="center"
								type="text"
								component={FormSelectField}
								dark
								label="Центр"
								autoComplete="off"
								placeholder="Центр"
								options={centersOption}
								onSelect={handleSelectCenter}
							/>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Segment>
								<Field
									name="title"
									type="text"
									component={FormInputField}
									dark
									label="Наименование центра*"
									autoComplete="off"
									placeholder="Наименование центра"
								/>
								<Field
									name="city"
									type="text"
									component={FormSelectField}
									dark
									label="Город"
									autoComplete="off"
									placeholder="Город"
									options={citiesOptions}
								/>
								<div>
									Добавить город, если нет в списке
									<input type="text"
									       name="newCity" value={newCity}
									       onInput={({ target: { value } }) => setNewCity(value)} />
									<button onClick={handleAddNewCity}>Добавить город</button>
								</div>
							</Segment>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
							<Segment>
								<Field
									name="address"
									type="text"
									component={FormInputField}
									dark
									label="Адрес"
									autoComplete="off"
									placeholder="Адрес"
								/>
							</Segment>
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
								<Field
									name="website"
									type="text"
									component={FormInputField}
									dark
									label="Адрес сайта"
									autoComplete="off"
									placeholder="Адрес сайта"
								/>
							</Segment>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={4}>
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
									onClick={handleDeleteCenter}
									className="new-news-tag__btn"
									primary
									data-testid="new-news-tag__btn"
								>
									Удалить центр
								</Button>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</div>
	);
};

CenterTab = reduxForm({
	form: 'center',
})(CenterTab);

CenterTab = connect(
	state => ({
		initialValues: {center: 'new'}, // pull initial values from account reducer
	}),
	{},
)(CenterTab);

export default CenterTab;