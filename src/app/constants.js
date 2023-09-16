import { CustomRow } from '@/components/custom-row';

import { CustomFilter } from '@/components/custom-filter';

export const FORM_NAME = 'form-ppt'
export  const COLUMNS = [
	{
		name: 'Тип Курса',
		id: 'type',
		customHeaderComponent: CustomFilter,
		filterName: 'withCourseType',
		alignLeft: false
	},
	{
		name: 'Модуль',
		id: 'module',
		customHeaderComponent: CustomFilter,
		filterName: 'withModule',
		alignLeft: false
	},
	{
		name: 'Город',
		id: 'city',
		customHeaderComponent: CustomFilter,
		filterName: 'withCity',
		alignLeft: true
	},
	{
		name: 'Даты',
		id: 'dates',
		customHeaderComponent: CustomFilter,
		filterName: 'withDates',
		alignLeft: true
	},
	{
		name: 'Тренер',
		id: 'trainer',
		customHeaderComponent: CustomFilter,
		filterName: 'withTrainer',
		alignLeft: true
	},
	{
		name: 'Организатор',
		id: 'organizer',
		customComponent: CustomRow,
	},
	{
		name: 'Описание',
		id: 'description',
		customComponent: CustomRow,
	},
];