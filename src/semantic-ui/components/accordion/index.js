import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomAccordion = ({ accordionIndex, onAccordionOpen, styled, fluid, accordeonItems, isAllOpen }) => {
	return (
		<Accordion styled={styled} fluid={fluid}>
			{accordeonItems &&
				accordeonItems.map(({ title, error, Component, isTitleIcon, itemKey }, index) => {
					return (
						<div key={itemKey || title}>
							<Accordion.Title
								className={error && 'error'}
								active={isAllOpen || accordionIndex === index}
								index={index}
								onClick={onAccordionOpen}
							>
								{title}
								{isTitleIcon && (
									<Icon name={isAllOpen || accordionIndex === index ? 'caret down' : 'caret right'} />
								)}
							</Accordion.Title>
							<Accordion.Content active={isAllOpen || accordionIndex === index}>
								{Component}
							</Accordion.Content>
						</div>
					);
				})}
		</Accordion>
	);
};

CustomAccordion.propTypes = {
	accordionIndex: PropTypes.number,
	onAccordionOpen: PropTypes.func,
	accordeonItems: PropTypes.array,
	styled: PropTypes.bool,
	fluid: PropTypes.bool,
	itemKey: PropTypes.string,
	isAllOpen: PropTypes.bool, // внешний проп для отображения открытыми всех пунктов аккордеона
};

export { CustomAccordion };
