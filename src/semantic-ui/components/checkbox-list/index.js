'use client'
import React, { useMemo, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Dimmer, Icon, Loader } from 'semantic-ui-react';
import './styles.scss';
import List from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import CellMeasurer from 'react-virtualized/dist/commonjs/CellMeasurer/CellMeasurer';
import CellMeasurerCache from 'react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache';
import isEqual from 'lodash/isEqual';
import FormCheckbox from '../form-checkbox';
import { CheckboxListHeader } from './components/checkbox-list-header';

function compareCheckboxListOptions(prevProps, nextProps) {
	if (!isEqual(prevProps.options, nextProps.options)) {
		return false;
	}
	if (prevProps.searchValue !== nextProps.searchValue) {
		return false;
	}
	if (!isEqual(prevProps.choosenOptions, nextProps.choosenOptions)) {
		return false;
	}
	if (prevProps.accordionIndex !== nextProps.accordionIndex) {
		return false;
	}
	if (prevProps.isAllChecked !== nextProps.isAllChecked) {
		return false;
	}
	if (prevProps.isLoading !== nextProps.isLoading) {
		return false;
	}
	if (prevProps.isFiltersOpenIconActive !== nextProps.isFiltersOpenIconActive) {
		return false;
	}

	return true;
}

// eslint-disable-next-line react/display-name
const CheckboxList = memo(
	({
		options,
		onSearchChange,
		onCheckboxChange,
		searchValue,
		onSliderCheckboxChange,
		width,
		height,
		choosenOptions,
		isAllChecked,
		checkedCheckboxListLength,
		isSearch,
		isLoading,
		isCount,
		isFiltersOpenIconActive,
		isFiltersOpenIcon,
		onFiltersOpen,
		accordionIndex,
		onAccordionOpen,
		customLabelComponent: CustomLabelComponent,
		checkboxListType,
		hasFooter,
		isFilterAddIcon,
		onAddIconClick,
	}) => {
		const cache = useRef(
			new CellMeasurerCache({
				fixedWidth: true,
				defaultHeight: 50,
			}),
		);

		const handleFormCheckoxClick = data => () => {
			onCheckboxChange(data);
		};

		const checkedCheckboxList = useMemo(() => {
			return Object.values(choosenOptions);
		}, [choosenOptions]);

		return (
			<div id="checkboxList" className="checkbox-list" style={{ width, height }}>
				{isSearch && (
					<CheckboxListHeader
						isFiltersOpenIcon={isFiltersOpenIcon}
						isFiltersOpenIconActive={isFiltersOpenIconActive}
						onFiltersOpen={onFiltersOpen}
						searchValue={searchValue}
						onSearchChange={onSearchChange}
						isFilterAddIcon={isFilterAddIcon}
						onAddIconClick={onAddIconClick}
					/>
				)}
				<ul
					className={`${isSearch ? 'checkbox-list__list-with-search' : ''} checkbox-list__list ${
						!hasFooter && isSearch ? 'checkbox-list__footer-disabled-with-search' : ''
					} ${!hasFooter && !isSearch ? 'checkbox-list__footer-disabled' : ''}`}
				>
					{isLoading && (
						<Dimmer inverted active>
							<Loader />
						</Dimmer>
					)}
					{checkboxListType === 'isAccordionList' && (
						<>
							{options.length || checkedCheckboxList.length ? (
								<Accordion className="checkbox-list__accordion" styled fluid>
									<Accordion.Title
										className="checkbox-list__accordion-title"
										active={accordionIndex === 0}
										index={0}
										onClick={onAccordionOpen}
									>
										Выбранные
										<Icon name={accordionIndex === 0 ? 'caret down' : 'caret right'} />
										<div className="checkbox-list__accordion-title-count">
											({checkedCheckboxList.length})
										</div>
									</Accordion.Title>
									<Accordion.Content
										className="checkbox-list__accordion-content"
										active={accordionIndex === 0}
									>
										{checkedCheckboxList.length ? (
											<ul className="checkbox-list__checked-list checkbox-list__accordion-checked-list">
												<AutoSizer>
													{({ height, width }) => (
														<List
															width={width}
															height={height}
															rowCount={checkedCheckboxList.length}
															rowHeight={45}
															rowRenderer={({ index, key, style }) => {
																return (
																	accordionIndex === 0 && (
																		<li
																			className="checkbox-list__list-item"
																			key={key}
																			style={style}
																		>
																			<div className="checkbox-list__checkbox-wrapper">
																				<FormCheckbox
																					label={
																						checkedCheckboxList[index].text
																					}
																					type="checkbox"
																					onChange={handleFormCheckoxClick(
																						checkedCheckboxList[index],
																					)}
																					checked
																				/>
																				{CustomLabelComponent && (
																					<CustomLabelComponent
																						options={checkedCheckboxList}
																						index={index}
																					/>
																				)}
																			</div>
																		</li>
																	)
																);
															}}
														/>
													)}
												</AutoSizer>
											</ul>
										) : (
											<div className="checkbox-list__no-result-message">
												Нет выбранных элементов
											</div>
										)}
									</Accordion.Content>
									<Accordion.Title
										className="checkbox-list__accordion-title"
										active={accordionIndex === 1}
										index={1}
										onClick={onAccordionOpen}
									>
										Результаты поиска
										<Icon name={accordionIndex === 1 ? 'caret down' : 'caret right'} />
										<div className="checkbox-list__accordion-title-count">({options.length})</div>
									</Accordion.Title>
									<Accordion.Content
										className="checkbox-list__accordion-content"
										active={accordionIndex === 1}
									>
										{options.length ? (
											<AutoSizer>
												{({ height, width }) => (
													<List
														width={width}
														height={height}
														rowCount={options.length}
														rowHeight={45}
														rowRenderer={({ index, key, style }) => {
															return (
																accordionIndex === 1 && (
																	<li
																		className="checkbox-list__list-item"
																		key={key}
																		style={style}
																	>
																		<div className="checkbox-list__checkbox-wrapper">
																			<FormCheckbox
																				label={options[index].text}
																				type="checkbox"
																				onChange={handleFormCheckoxClick(
																					options[index],
																				)}
																				checked={Boolean(
																					choosenOptions[
																						options[index].value
																					],
																				)}
																			/>
																			{CustomLabelComponent && (
																				<CustomLabelComponent
																					options={options}
																					index={index}
																				/>
																			)}
																		</div>
																	</li>
																)
															);
														}}
													/>
												)}
											</AutoSizer>
										) : (
											<div className="checkbox-list__no-result-message">
												<span className="checkbox-list__no-result-message-text">
													Ничего не найдено, скорректируйте запрос
												</span>
											</div>
										)}
									</Accordion.Content>
								</Accordion>
							) : (
								<div className="checkbox-list__no-result-message">
									<span className="checkbox-list__no-result-message-text">
										Ничего не найдено, скорректируйте запрос
									</span>
								</div>
							)}
						</>
					)}
					{checkboxListType === 'isDoubleList' && Boolean(checkedCheckboxList.length) && (
						<ul className="checkbox-list__checked-list">
							<li className="checkbox-list__checked-list-item">
								Выбранные
								<div className="checkbox-list__checked-list-text">({checkedCheckboxList.length})</div>
							</li>
							{checkedCheckboxList.map(option => (
								<li className="checkbox-list__list-item" key={option.value}>
									<div
										className="checkbox-list__checkbox-wrapper"
										onClick={handleFormCheckoxClick(option)}
									>
										<FormCheckbox
											label={option.text}
											type="checkbox"
											checked={Boolean(choosenOptions[option.value])}
										/>
									</div>
								</li>
							))}
						</ul>
					)}
					{checkboxListType === 'isDoubleList' && Boolean(options.length) && (
						<li className="checkbox-list__checked-list-item">
							Результаты поиска
							<div className="checkbox-list__checked-list-text">({options.length})</div>
						</li>
					)}
					{checkboxListType !== 'isAccordionList' && (
						<div style={{ height: '100%', width }}>
							<AutoSizer>
								{({ width, height }) => {
									return (
										<List
											width={width}
											height={height}
											rowHeight={cache.current.rowHeight}
											deferredMeasurementCache={cache.current}
											rowCount={options.length}
											rowRenderer={({ key, index, style, parent }) => {
												return (
													<CellMeasurer
														key={key}
														cache={cache.current}
														parent={parent}
														columnIndex={0}
														rowIndex={index}
													>
														<div
															className="checkbox-list__list-item"
															style={style}
															onClick={handleFormCheckoxClick(options[index])}
														>
															<FormCheckbox
																label={options[index].text}
																type="checkbox"
																checked={Boolean(choosenOptions[options[index].value])}
																disabled={options[index].disabled}
															/>
														</div>
													</CellMeasurer>
												);
											}}
										/>
									);
								}}
							</AutoSizer>
						</div>
					)}
				</ul>
				{hasFooter && (
					<div className="checkbox-list__footer">
						{checkboxListType === 'isDoubleList' || checkboxListType === 'isAccordionList' ? (
							<span className="checkbox-list__footer-text" onClick={onSliderCheckboxChange}>
								{isAllChecked ? 'Снять весь список' : 'Выбрать весь список'}
							</span>
						) : (
							<span className="checkbox-list__footer-text" onClick={onSliderCheckboxChange}>
								{isAllChecked ? 'Снять все' : 'Выбрать все'}
							</span>
						)}

						<div className="checkbox-list__slider">
							<FormCheckbox
								disabled={!options.length && checkboxListType !== 'isAccordionList'}
								checked={isAllChecked}
								onChange={onSliderCheckboxChange}
								slider
								type="checkbox"
							/>
						</div>
						{isCount && (
							<div className="checkbox-list__count">
								<span>{checkedCheckboxListLength}/</span>
								<span>{options.length}</span>
							</div>
						)}
					</div>
				)}
			</div>
		);
	},
	compareCheckboxListOptions,
);

CheckboxList.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
			key: PropTypes.string,
			disabled: PropTypes.bool,
		}),
	).isRequired,
	/** Список чекбоксов */
	onSearchChange: PropTypes.func,
	/** Функция изменения строки поиска */
	onCheckboxChange: PropTypes.func.isRequired,
	/** Функция изменения состояния чекбокса */
	searchValue: PropTypes.string,
	/** Значение поисковой строки */
	onSliderCheckboxChange: PropTypes.func,
	/** Функция изменения состояния чекбокса "выбрать все" */
	width: PropTypes.string,
	/** Ширина компонента */
	height: PropTypes.string,
	/** Высота компонента */
	choosenOptions: PropTypes.shape({
		value: PropTypes.string,
		text: PropTypes.string,
		key: PropTypes.string,
	}).isRequired,
	/** Выбранные чекбоксы */
	isAllChecked: PropTypes.bool,
	/** Состояние чекбокса "выбрать все" (выбран/нет) */
	isSearch: PropTypes.bool,
	/** Поисковая строка */
	checkedCheckboxListLength: PropTypes.number,
	/** Число выбранных чекбоксов */
	isLoading: PropTypes.bool,
	/** Лоадер */
	isCount: PropTypes.bool,
	/** Сколько чекбоксов выбрано / всего чекбоксов */
	isFiltersOpenIconActive: PropTypes.bool,
	/** Состояние иконки открытия фильтров */
	isFiltersOpenIcon: PropTypes.bool,
	/** Иконка открытия фильтров */
	onFiltersOpen: PropTypes.func,
	/** Фукнкция клик по иконке открытия фильтров */
	accordionIndex: PropTypes.oneOf([-1, 0, 1]),
	/** Индекс отркытого раздела аккордиона, -1 если все разделы закрыты */
	onAccordionOpen: PropTypes.func,
	/** Функция открытия раздела аккордиона */
	customLabelComponent: PropTypes.elementType,
	/** Компонент текст checkbox */
	checkboxListType: PropTypes.oneOf(['isDoubleList', 'isAccordionList']),
	/** Тип списока, если ничего не передано, то список одинарный */
	hasFooter: PropTypes.bool,
	/* Добавление футера */
	isFilterAddIcon: PropTypes.bool,
	/* Иконка добавления новой сущности */
	onAddIconClick: PropTypes.func,
	/* Обработчик клика иконки добавления сущности */
};

export { CheckboxList };
