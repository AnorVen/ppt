import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Pagination, Icon } from 'semantic-ui-react';

const TablePagination = ({
	pagination: {
		currentPage,
		totalPages,
		total,
		from,
		to,
		isNextItem,
		isPrevItem,
		onPageChange,
		isLastItem,
		isFirstItem,
		isPaginationTextHidden,
	},
	isShort,
}) => {
	return (
		<div className="table-pagination">
			{!isPaginationTextHidden && (
				<div className="table-pagination__text">
					Записи с {from} по {to} из {total}
				</div>
			)}
			{totalPages !== 1 ? (
				<Pagination
					nextItem={{
						className: `${isShort || !isNextItem ? 'hidden' : ''}`,
						'aria-label': 'Next item',
						disabled: !isNextItem,
						content: (
							<div>
								Следующая <Icon name="chevron right" />
							</div>
						),
					}}
					prevItem={{
						'aria-label': 'Previous item',
						content: (
							<div>
								<Icon name="chevron left" /> Предыдущая
							</div>
						),
						className: `${isPrevItem ? '' : 'hidden'}`,
						disabled: !isPrevItem,
					}}
					firstItem={isFirstItem}
					lastItem={isLastItem}
					totalPages={totalPages}
					activePage={currentPage}
					onPageChange={onPageChange}
				/>
			) : null}
		</div>
	);
};

TablePagination.propTypes = {
	pagination: PropTypes.shape({
		currentPage: PropTypes.number.isRequired,
		totalPages: PropTypes.number.isRequired,
		total: PropTypes.number,
		from: PropTypes.number,
		to: PropTypes.number,
		isNextItem: PropTypes.bool.isRequired,
		isPrevItem: PropTypes.bool.isRequired,
		isFirstItem: PropTypes.bool.isRequired,
		isLastItem: PropTypes.bool.isRequired,
		onPageChange: PropTypes.func.isRequired,
		isPaginationTextHidden: PropTypes.bool,
	}).isRequired,
	isShort: PropTypes.bool,
};
export default TablePagination;
