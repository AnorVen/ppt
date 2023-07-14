import moment from 'moment';
import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { initialState } from './reducer';
import { FORM_NAME } from '@/app/constants';

const selectPptDomain = state => state.pptReducer || initialState;

export const getActiveAccordionIndexSelector = () =>
	createSelector(selectPptDomain, ({ activeAccordionIndex }) => activeAccordionIndex);

export const getFormValuesSelector = () =>
	createSelector(getFormValues(FORM_NAME), formValues => {
		return formValues;
	});

export const getPayloadForRequestSelector = () =>
	createSelector(selectPptDomain, getFormValuesSelector(), ({ mainTextValue, tags }, formValues) => {
		return {
			...formValues,
			text: mainTextValue,
			timestamp: moment(formValues.timestamp).format('YYYY-MM-DDTHH:mm:ssZ'),
			tags,
			is_active: formValues.is_active || false,
		};
	});

export const getTagsSelector = () => createSelector(selectPptDomain, ({ tags }) => tags || []);

export const getNewNewsTagSelector = () => createSelector(selectPptDomain, ({ newTag }) => newTag);

export const getSectorsFormInitiailValuesSelector = () =>
	createSelector(selectPptDomain, ({ news }) => {
		if (!news) return {};
		return {
			...news,
			timestamp: moment(news.timestamp).format('YYYY-MM-DD'),
		};
	});

export const getLoadingFiltersIdArraySelector = () =>
	createSelector(selectPptDomain, ({ isDictionariesLoading }) => {
		return isDictionariesLoading ? ['save'] : [];
	});

export const getDisabledFiltersIdArraySelector = () =>
	createSelector(selectPptDomain, ({ isNewsLoading }) => {
		return isNewsLoading ? ['save'] : [];
	});
export const getMainTextValueSelector = () =>
	createSelector(selectPptDomain, ({ mainTextValue }) => mainTextValue);

export const getIsNewsLoadingSelector = () =>
	createSelector(selectPptDomain, ({ isNewsLoading }) => {
		return isNewsLoading;
	});



export const getSortingSelector = () => createSelector(selectPptDomain, ({ sorting }) => sorting);

export const getOpenedFilterDropdownIdSelector = () =>
	createSelector(selectPptDomain, ({ openedFilterDropdownId }) => openedFilterDropdownId);

export const getFilterSearchSelector = () => createSelector(selectPptDomain, ({ filterSearch }) => filterSearch);

export const getMetaSelector = () => createSelector(selectPptDomain, ({ meta }) => meta);

export const getPaginationSelector = () =>
	createSelector(selectPptDomain, ({ pagination }) => {
		if (!pagination || pagination.total_pages === 0) {
			return null;
		}

		return {
			currentPage: pagination.current_page,
			totalPages: pagination.total_pages,
			perPage: pagination.per_page,
			total: pagination.total,
			from: pagination.current_page * pagination.per_page - (pagination.per_page - 1),
			to:
				pagination.total_pages === pagination.current_page
					? pagination.total
					: pagination.current_page * pagination.per_page,
			isNextItem: pagination.current_page !== pagination.total_pages,
			isPrevItem: pagination.current_page !== 1,
			isLastItem: false,
			isFirstItem: false,
		};
	});

export const getIsDeleteModalOpenSelector = () =>
	createSelector(selectPptDomain, ({ isDeleteModalOpen }) => isDeleteModalOpen);

export const getIsHeaderSearchOpenSelector = () =>
	createSelector(selectPptDomain, ({ isHeaderSearchOpen }) => isHeaderSearchOpen);

export const getIsFiltersVisibleSelector = () =>
	createSelector(selectPptDomain, ({ isFiltersVisible }) => isFiltersVisible);

export const getNewsListRequestMetaSelector = () =>
	createSelector(
		selectPptDomain,
		({ meta, sorting, filterSearch, headerSearch, isTrashedShown, checkboxFilters }) => {
			const filters = {};

			const column_search = [];
			if (isTrashedShown) {
				filters.withTrashed = true;
			}
			if (filterSearch.title.length) {
				column_search.push({
					value: filterSearch.title,
					column: 'title',
				});
			}
			Object.entries(checkboxFilters).reduce((acc, [key, value]) => {
				const res = Object.entries(value).reduce((valAcc, [key, val]) => {
					if (val) {
						valAcc.push(Number(key));
					}
					return valAcc;
				}, []);

				if (res.length) {
					acc[key] = res;
				}

				return acc;
			}, filters);

			return {
				...meta,
				column_search,
				order: sorting,
				filters,
				search: headerSearch,
				response_data: [
					'items/is_active',
					'items/is_pinned',
					'items/title',
					'items/timestamp',
					'items/uuid',
					'items/deleted_at',
				],
			};
		},
	);

export const getExportDataSelector = () =>
	createSelector(selectPptDomain, ({ exportData }) =>
		exportData.map(({ title, timestamp, is_active, is_pinned }) => ({
			timestamp: moment(timestamp).format(DATE_FORMAT),
			title,
			is_active: is_active ? 'Да' : 'Нет',
			is_pinned: is_pinned ? 'Да' : 'Нет',
		})),
	);

export const getSelectedNewsUuidSelector = () =>
	createSelector(selectPptDomain, ({ selectedUuid }) => selectedUuid);

export const getNewsListSelector = () =>
	createSelector(selectPptDomain, ({ newsList, selectedUuid }) => {
		return newsList.map(news => ({
			...news,
			timestamp: moment(news.timestamp).format('DD.MM.YYYY'),
			isActiveRow: news.uuid === selectedUuid,
			isDeleted: Boolean(news.deleted_at),
		}));
	});

export const getActiveFiltersIdArraySelector = () =>
	createSelector(selectPptDomain, ({ isFiltersVisible }) => (isFiltersVisible ? ['filter'] : []));

export const getHeaderSearchSelector = () => createSelector(selectPptDomain, ({ headerSearch }) => headerSearch);

export const getIsTrashedShownSelector = () =>
	createSelector(selectPptDomain, ({ isTrashedShown }) => isTrashedShown);


export const getCheckedOptionsSelector = () =>
	createSelector(selectPptDomain, ({ checkboxFilters }) => {
		return Object.keys(checkboxFilters).reduce((result, key) => {
			result[key] = Object.entries(checkboxFilters[key]).reduce((prev, [key, value]) => {
				if (value) {
					prev[key] = value;
				}

				return prev;
			}, {});
			return result;
		}, {});
	});

export const getCheckboxListOptionsSelector = () =>
	createSelector(selectPptDomain, () => ({
		withActive: IS_ACTIVE_OPTIONS,
		withPinned: IS_PINNED_OPTIONS,
	}));

export const getCheckedOptionsCountSelector = () =>
	createSelector(selectPptDomain, getCheckboxListOptionsSelector(), ({ checkboxFilters }, filteredOptions) => {
		return Object.entries(filteredOptions).reduce((result, [key]) => {
			result[key] = Object.values(checkboxFilters[key]).filter(Boolean).length;
			return result;
		}, {});
	});

export const getIsAllOptionsCheckedSelector = () =>
	createSelector(getCheckboxListOptionsSelector(), getCheckedOptionsCountSelector(), (filteredOptions, counts) => {
		return Object.entries(filteredOptions).reduce((result, [key, values]) => {
			result[key] = values.length === counts[key] && values.length !== 0;
			return result;
		}, {});
	});

export const getCheckboxFiltersSelector = () =>
	createSelector(selectPptDomain, ({ checkboxFilters }) => checkboxFilters);
