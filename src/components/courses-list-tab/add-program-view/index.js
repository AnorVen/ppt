import DayPickerView from '@/components/courses-tab/day-picker';
import { TextButton } from '@/components/text-button';
import { FormInputField } from '@/semantic-ui/components/form-input-field';
import { FormSelectField } from '@/semantic-ui/components/form-select-field';
import React from 'react';
import { Field } from 'redux-form';
import './styles.scss';

const AdditionalProgramView = ({ fields, cities, trainers }) => {
	const newRow = {
		module_number: fields.length + 1,
		trainer: '',
		dates: [],
		count: 0,
		them: '',
		description: '',
		city: '',
	};
	return (
		<>
			{fields && (
				<div className="modules" data-testid="modules">
					{fields.map((item, index) => (
						<div className="modules__item" key={`modules${index}`}>
							<div>
								<h4>Модуль {index + 1}</h4>
								<div>
									<Field
										name={`modules.${index}.them`}
										type="text"
										component={FormInputField}
										dark
										label="Тема модуля"
										autoComplete="off"
										placeholder=""
									/>
								</div>
								<div>
									<Field
										name={`modules.${index}.description`}
										type="text"
										component={FormInputField}
										dark
										label="Тема модуля"
										autoComplete="off"
										placeholder=""
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
								<div>
									<Field
										name={`modules.${index}.city`}
										type="text"
										component={FormSelectField}
										dark
										label="Город"
										autoComplete="off"
										placeholder=""
										options={cities}
									/>
								</div>
							</div>
							<div>
								<Field
									name={`modules.${index}.dates`}
									type="dates"
									component={DayPickerView}
									dark
									label="Даты модуля"
									autoComplete="off"
								/>
								<TextButton onClick={() => fields.remove(index)} leftIcon="minus">
								Удалить модуль
							</TextButton>
							</div>

						</div>
					))}


				</div>
			)}
			<TextButton onClick={() => fields.push(newRow)} leftIcon="plus">
				Добавить модуль
			</TextButton>
		</>
	);
};

export { AdditionalProgramView };
