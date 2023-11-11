'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import './style.scss';

const EthicalCommitete = ({ params }) => {
	console.log('ethical', params);
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (e, { index }) => {
		setActiveIndex(activeIndex === index ? -1 : index);
	};
	return (
		<div className="wrapper_text">
			<div className="faces">
				<div>
					<Link href="/people/654ea25d93dff5ed47343439">
						<img src={`/images/654ea25d93dff5ed47343439/avatar.jpg`} width={200} height={200}
						     alt={`Галина Скрябина`} />
						<p>Галина Скрябина</p>
					</Link>
				</div>
				<div>
					<Link href="/people/654ee7596ee3674c024861bd">
						<img src={`/images/noAva.jpg`} width={200} height={200}
						     alt={`Максим Чекмарев`} />
						<p>Максим Чекмарев</p>
					</Link>
				</div>
				<div>
					<Link href="/people/654eedbe6ee3674c024863c3">
						<img src={`/images/noAva.jpg`} width={200} height={200}
						     alt={`Павел Фролов`} />
						<p>Павел Фролов</p>
					</Link>
				</div>

			</div>
			<h3>Заключения</h3>
			<div>

				<Accordion>
					<Accordion.Title
						active={activeIndex === 0}
						index={0}
						onClick={handleClick}
					>
						<Icon name="dropdown" />
						Заключение от 10.11.2023/Владимир Перебейносов
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 0}>
						<p>Этической комиссией (Галина Скрябина, Екатерина Докунова, Максим Гончаров и Павел Фролов)
							тренерского совета России была рассмотрена конфликтная психотерапевтическая ситуация с
							участием Владимира Перебейносова, выпускника мастер курса.</p>
						<p>
							В результате было признано, что поведение терапевта являлось неэтичным, грубо нарушающим
							принципы действия в интересах клиента и принцип ненанесения ущерба клиенту.</p>
						<p>

							В связи с тем, что данное нарушение было повторным, Владимир Перебейносов, несмотря на
							успешно
							сданный экзамен, не допускается до сертификации в ближайшие 5 лет, его диплом базового
							консультанта будет отозван, он отстранен от психотерапевтической практики, не имеет права
							быть
							организатором или ведущим семинаров или курсов, супервизором, личным или групповым
							терапевтом
							(лично или онлайн). В целом, ему предписано пройти 350 дополнительных часов личной терапии,
							а
							также быть участником как минимум одного семинара по этике в ППТ. Он может остаться
							наблюдательным членом WAPP и может участвовать во всех образовательных проектах в качестве
							обычного участника, если в проекте нет пострадавших от его действий.
						</p>
						<p>
							Данное решение донесено до Владимира Перебейносова, пострадавших от его действий клиентов и
							до
							совета директоров WAPP.
						</p>
					</Accordion.Content>
				</Accordion>
			</div>

		</div>

	);
};

export default EthicalCommitete;