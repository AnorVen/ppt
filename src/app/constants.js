/*import { CustomFilter } from '@/components/custom-filter';
import { CustomRow } from '@/components/custom-row';*/

export const FORM_NAME = 'form-ppt'
export  const COLUMNS = [
	{
		name: 'Дата публикации',
		id: 'timestamp',
		//customHeaderComponent: CustomFilter,
	},
	{
		name: 'Заголовок',
		id: 'title',
		//customHeaderComponent: CustomFilter,
	},
	{
		name: 'Активна',
		id: 'is_active',
		//customHeaderComponent: CustomFilter,
		//customComponent: CustomRow,
		filterName: 'withActive',
	},
	{
		name: 'Закреплена',
		id: 'is_pinned',
		//customHeaderComponent: CustomFilter,
	//	customComponent: CustomRow,
		filterName: 'withPinned',
	},
];