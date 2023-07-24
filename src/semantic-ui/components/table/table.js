'use client'
import React, { memo, useMemo, useRef } from 'react';
import { Dimmer, Loader, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../tables.scss';
import './styles.scss';


// eslint-disable-next-line react/display-name
const TableComponent = memo(
	({ columns, rows, onRowDoubleClick, onRowClick, isScroll, isTableLoading, isTableFixed }) => {
		const tableBodyRef = useRef(null);

		// При наличии скрола, добавляет padding-left хедеру
		const offset = useMemo(() => {
			if (tableBodyRef.current && isScroll) {
				if (tableBodyRef.current.offsetWidth > tableBodyRef.current.clientWidth) {
					return 10;
				}
			}

			return 0;
		}, [tableBodyRef.current && tableBodyRef.current.clientWidth]);

		return (
			<>
				<Table
					selectable={Boolean(onRowDoubleClick)}
					id="tableHeader"
					style={{
						paddingRight: `${offset}px`,
					}}
					className={`${isTableFixed && 'fixed'}`}
				>
					<Table.Header fullWidth>
						<Table.Row>
							{columns.map(column => {
								const { name, customHeaderComponent: CustomHeaderComponent } = column;
								if (CustomHeaderComponent) {
									return (
										<Table.HeaderCell style={{ width: column.width }} key={name}>
											<CustomHeaderComponent columnData={column} />
										</Table.HeaderCell>
									);
								}

								return (
									<Table.HeaderCell style={{ width: column.width }} key={name}>
										{name}
									</Table.HeaderCell>
								);
							})}
						</Table.Row>
					</Table.Header>
					{!isScroll && (
						<Table.Body>
							{!rows.length && (
								<Table.Row>
									<Table.Cell className="no-result-text">Нет данных</Table.Cell>
								</Table.Row>
							)}
							{rows.map(row => (
								<Table.Row
									key={row.id}
									onClick={() => {
										if (onRowClick) onRowClick(row);
									}}
									onDoubleClick={() => {
										if (onRowDoubleClick) onRowDoubleClick(row);
									}}
									className={`${onRowDoubleClick && 'pointer'} ${
										row.isActiveRow ? 'active-row' : ''
									}`}
								>
									{columns.map(({ id, customComponent: CustomComponent, ...columnData }) => {
										if (CustomComponent) {
											return (
												<Table.Cell key={id}>
													<CustomComponent
														rowData={row}
														columnId={id}
														columnData={columnData}
													/>
												</Table.Cell>
											);
										}

										return <Table.Cell key={id}>{row[id]}</Table.Cell>;
									})}
								</Table.Row>
							))}
						</Table.Body>
					)}
				</Table>
				{isScroll && (
					<div className="table-body" ref={tableBodyRef}>
						{isTableLoading && (
							<>
								<Dimmer active inverted>
									<Loader active size="large" />
								</Dimmer>
							</>
						)}
						<Table className={`${isTableFixed && 'fixed'}`}>
							<Table.Body>
								{!rows.length && (
									<Table.Row>
										<Table.Cell className="no-result-text">Нет данных</Table.Cell>
									</Table.Row>
								)}
								{rows.map((row, rowIndex) => (
									<Table.Row
										key={row.id}
										onClick={() => {
											if (onRowClick) onRowClick(row);
										}}
										onDoubleClick={() => {
											if (onRowDoubleClick) onRowDoubleClick(row);
										}}
										className={`${onRowDoubleClick && 'pointer'} ${
											row.isActiveRow ? 'active-row' : ''
										}`}
									>
										{columns.map(
											({ id, customComponent: CustomComponent, className, ...columnData }) => {
												if (CustomComponent) {
													return (
														<Table.Cell
															style={{ width: columnData.width }}
															key={id}
															className={className}
														>
															<CustomComponent
																rowData={row}
																columnId={id}
																columnData={columnData}
																rowIndex={rowIndex}
															/>
														</Table.Cell>
													);
												}

												return (
													<Table.Cell
														style={{ width: columnData.width }}
														key={id}
														className={className}
													>
														{row[id]}
													</Table.Cell>
												);
											},
										)}
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</div>
				)}
			</>
		);
	},
);

TableComponent.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			customComponent: PropTypes.elementType,
		}),
	),
	rows: PropTypes.arrayOf(PropTypes.object).isRequired,
	onRowDoubleClick: PropTypes.func,
	isScroll: PropTypes.bool,
	onRowClick: PropTypes.func,
	isTableLoading: PropTypes.bool,
	isTableFixed: PropTypes.bool,
	noResultMessage: PropTypes.string,
};

export { TableComponent };
