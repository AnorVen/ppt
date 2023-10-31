import { CustomRow } from '@/components/custom-row';

import { CustomFilter } from '@/components/custom-filter';
import { base_themes, master_themes } from '@/constants';

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

export const filterNamesToColumns = COLUMNS.reduce((acc, val)=>{
	if(val.filterName){
		acc[val.filterName] = val.id
	}
	return acc
}, {})

export const TEXT_FIELD_PROPS = {
	formats: [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
	],
	modules: {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			[{ align: [] }],
			['link'],
			['clean'],
		],
	},
};



export const basic_course = Object.keys(base_themes).reduce((acc,key, index )=>{
	acc.push({
		module_number: index + 1,
		trainer: null,
		dates: [],
		count: 24,
		them: key,
	})
	return acc
}, [])
export const master_course = Object.keys(master_themes).reduce((acc,key, index )=>{
	acc.push({
		module_number: index + 1,
		trainer: null,
		dates: [],
		count: 24,
		them: key,
	})
	return acc
}, [])