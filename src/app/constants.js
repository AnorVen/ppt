import { CustomRow } from '@/components/custom-row';

import { CustomFilter } from '@/components/custom-filter';

export const FORM_NAME = 'form-ppt'
export  const COLUMNS = [
	{
		name: 'Тип Курса',
		id: 'type',
		customHeaderComponent: CustomFilter,
		filterName: 'withCourseType',
	},
	{
		name: 'Модуль',
		id: 'title',
		customHeaderComponent: CustomFilter,
		filterName: 'withModule',
	},
	{
		name: 'Город',
		id: 'city',
		customHeaderComponent: CustomFilter,
		filterName: 'withCity',
	},
	{
		name: 'Даты',
		id: 'dates',
		customHeaderComponent: CustomFilter,
		filterName: 'withDates',
	},
	{
		name: 'Тренер',
		id: 'trainer',
		customHeaderComponent: CustomFilter,
		filterName: 'withTrainer',
	},
	{
		name: 'Тренер',
		id: 'trainer',
	},
	{
		name: 'Описание',
		id: 'description',
		customComponent: CustomRow,
	},
];