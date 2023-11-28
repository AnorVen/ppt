import DayPickerView from '@/components/courses-tab/day-picker';
import { base_themes, master_themes } from '@/constants';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'redux-form';
import { OptionsType } from '../../prop-types';
import './styles.scss';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const TableView = ({ fields, variant }) => {
	const themes = variant === 'basic_course' ?
		Object.entries(base_themes).map(([key, val]) => ({
			text: val,
			value: key,
			key: key,
		}))
		: Object.entries(master_themes).map(([key, val]) => ({
			text: val,
			value: key,
			key: key,
		}));
	const trainers = useSelector(state => Object.values(state.main.trainers).map(
		(trainer) => {
			return {
				text: `${trainer.surname} ${trainer.name}`,
				value: trainer.id,
				key: trainer.id,
			};
		}));
	return (
		<>
			{fields && (
				<div className="modules" data-testid="modules">
					{fields.map((item, index) => (
						<div className="modules__item" key={`modules${index}`}>
							<div className="modules__textBlocks">
								<h4>Модуль {index + 1}</h4>
								<div>
									<Field
										name={`modules.${index}.them`}
										type="text"
										component={FormSelectField}
										dark
										label="Тема модуля"
										autoComplete="off"
										placeholder=""
										options={themes}
									/>
								</div>
								<div>
									<Field
										name={`modules.${index}.count`}
										type="text"
										component={FormInputField}
										dark
										label="Продолжительность"
										autoComplete="off"
										placeholder=""
									/>
								</div>
								<div>
									<Field
										name={`modules.${index}.trainer`}
										type="text"
										component={FormSelectField}
										dark
										label="Тренер модуля"
										autoComplete="off"
										options={trainers}
									/>
								</div>
							</div>

							<div className="modules-calendar">
								<Field
									name={`modules.${index}.dates`}
									type="dates"
									component={DayPickerView}
									dark
									label="Даты модуля"
									autoComplete="off"
								/>
							</div>
						</div>
					))}

				</div>
			)}
		</>
	);
};

export { TableView };
