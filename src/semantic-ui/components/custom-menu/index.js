/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Loader, Popup } from 'semantic-ui-react';
import { Icon } from '../icon';
import SearchField from '../search-field';

const CustomMenu = ({
	components,
	onIconClick,
	activeFiltersIdArray,
	loadingFiltersIdArray,
	disabledFiltersIdArray,
	saveButtonTabIndex,
	isHeaderSearchOpen,
	onHeaderSearchOpen,
	onHeaderSearchValueChange,
	headerSearchValue,
}) => {
	return (
		<div className="custom-menu">
			<ul className="custom-menu__list">
				{components &&
					components.map(({ id, name, type, size, customComponent: CustomComponent, popupText }, idx) => {
						if (type === 'separator') {
							return (
								<li key={id}>
									<div className="custom-menu__separator" />
								</li>
							);
						}
						if (id === 'search') {
							return (
								<Popup
									key="search"
									content="Поиск (ctrl + shift + s)"
									position="bottom center"
									className="header-menu__popup"
									trigger={
										<div
											className={`custom-menu__search${
												isHeaderSearchOpen ? ' custom-menu__search_active' : ''
											}`}
										>
											<SearchField
												onOpen={onHeaderSearchOpen}
												isOpen={isHeaderSearchOpen}
												onChange={onHeaderSearchValueChange}
												value={headerSearchValue}
											/>
										</div>
									}
								/>
							);
						}
						if (CustomComponent) {
							return (
								<Popup
									key={id}
									content={popupText}
									disabled={!popupText}
									position={`bottom ${idx === components.length - 1 ? 'left' : 'center'}`}
									className="custom-menu__popup"
									trigger={
										<li className="custom-menu__list-item">
											{loadingFiltersIdArray && loadingFiltersIdArray.includes(id) ? (
												<Loader active size="small" />
											) : (
												<CustomComponent name={name} size={size} />
											)}
										</li>
									}
								/>
							);
						}

						return (
							<Popup
								key={id}
								content={popupText}
								disabled={!popupText}
								position={`bottom ${idx === components.length - 1 ? 'left' : 'center'}`}
								className="custom-menu__popup"
								trigger={
									<li className="custom-menu__list-item">
										{loadingFiltersIdArray && loadingFiltersIdArray.includes(id) ? (
											<Loader active size="small" />
										) : (
											<>
												{saveButtonTabIndex && id === 'save' ? (
													<button
														type="button"
														onClick={() => onIconClick(id)}
														tabIndex={saveButtonTabIndex}
														className="custom-menu__button"
													>
														<Icon
															className={`custom-menu__icon ${
																activeFiltersIdArray &&
																activeFiltersIdArray.includes(id)
																	? 'custom-menu__icon-active'
																	: ''
															}`}
															active={
																activeFiltersIdArray &&
																activeFiltersIdArray.includes(id)
															}
															name={name}
															disabled={
																disabledFiltersIdArray &&
																disabledFiltersIdArray.includes(id)
															}
															size={size}
														/>
													</button>
												) : (
													<Icon
														className={`custom-menu__icon ${
															activeFiltersIdArray && activeFiltersIdArray.includes(id)
																? 'custom-menu__icon-active'
																: ''
														}`}
														active={
															activeFiltersIdArray && activeFiltersIdArray.includes(id)
														}
														name={name}
														onClick={() => onIconClick(id)}
														disabled={
															disabledFiltersIdArray &&
															disabledFiltersIdArray.includes(id)
														}
														size={size}
													/>
												)}
											</>
										)}
									</li>
								}
							/>
						);
					})}
			</ul>
		</div>
	);
};

CustomMenu.propTypes = {
	components: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			name: PropTypes.string,
			size: PropTypes.string,
			id: PropTypes.string.isRequired,
			popupText: PropTypes.string,
			customComponent: PropTypes.elementType,
		}),
	).isRequired,
	onIconClick: PropTypes.func,
	activeFiltersIdArray: PropTypes.arrayOf(PropTypes.string),
	loadingFiltersIdArray: PropTypes.arrayOf(PropTypes.string),
	disabledFiltersIdArray: PropTypes.arrayOf(PropTypes.string),
	saveButtonTabIndex: PropTypes.number,
	isHeaderSearchOpen: PropTypes.bool,
	onHeaderSearchOpen: PropTypes.func,
	onHeaderSearchValueChange: PropTypes.func,
	headerSearchValue: PropTypes.string,
};

export { CustomMenu };
