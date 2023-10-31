/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import { TableView } from './index';
import configureStore from '../../../../store/createStore';

const props = {
	fields: [
		{
			name: '4',
			comment: '',
			work_types: [
				{
					work_type_uuid: 'work_type_uuid',
					vehicle_types: [
						{
							vehicle_type_uuid: 'vehicle_type_uuid',
							count: 5,
						},
						{
							vehicle_type_uuid: 'vehicle_type_uuid2',
							count: '1',
						},
					],
					material_uuid: 'material_uuid',
				},
			],
		},
	],
	itemIndex: 0,
	isDictionariesLoading: false,
	kursMaterials: [
		{
			value: 'material_uuid',
			text: 'тест',
			key: 'material_uuid',
		},
	],
	workTypesList: [
		{
			value: 'work_type_uuid2',
			text: 'work_type_uuid2',
			key: 'work_type_uuid2',
		},
		{
			value: 'work_type_uuid',
			text: 'work_type_uuid',
			key: 'work_type_uuid',
		},
		{
			value: 'work_type_uuid1',
			text: 'work_type_uuid1',
			key: 'work_type_uuid1',
		},
	],
	vehicleTypes: [
		{
			value: 'vehicle_type_uuid3',
			text: 'vehicle_type_uuid3',
			key: 'vehicle_type_uuid3',
		},
		{
			value: 'vehicle_type_uuid2',
			text: 'Автосамосвал2',
			key: 'vehicle_type_uuid2',
		},
		{
			value: 'vehicle_type_uuid',
			text: 'Автосамосвал0',
			key: 'vehicle_type_uuid',
		},
	],
};

const renderWithForm = props => {
	const store = configureStore({});

	const Form = reduxForm({
		form: 'FORM_NAME',
		enableReinitialize: true,
	})(TableView);

	return render(
		<Provider store={store}>
			<Form {...props} />
		</Provider>,
	);
};

describe('TableView', () => {
	it('should render TableView', () => {
		renderWithForm(props);
		expect(screen.getByTestId('table-view')).toBeInTheDocument();
		expect(screen.queryByTestId('table-view__add-row')).toBeInTheDocument();
	});

	it('should render empty TableView', () => {
		renderWithForm({ ...props, fields: null});
		expect(screen.queryByTestId('table-view')).not.toBeInTheDocument();
		expect(screen.queryByTestId('table-view__add-row')).toBeInTheDocument();
	});

	it('snapshot test', () => {
		const store = configureStore({});

		const Form = reduxForm({
			form: 'FORM_NAME',
			enableReinitialize: true,
		})(TableView);

		const component = renderer
			.create(
				<Provider store={store}>
					<Form {...props} />
				</Provider>,
			)
			.toJSON();

		expect(component).toMatchSnapshot();
	});
});
