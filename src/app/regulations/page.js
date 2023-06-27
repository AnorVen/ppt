import Image from 'next/image';
import Link from 'next/link';

const Regulation = async () => {
	return (
		<div className="wrapper_text">
			<h1>Раздел находится в стадии наполнения</h1>
			<br />
			<a href="/files/reglaments/guidelines_self-discovery.pdf" target="_blank">GUIDELINES FOR PPT TRAINERS
				EDUCATIONAL GROUP SELF-EXPERIENCE/SELF-DISCOVERY IN PPT TRAINING</a>
			<br />
			<br />
			<a href="/files/reglaments/standarts.pdf" target="_blank">Тренинги по Позитивной психотерапии <br />Методичка
				для тренеров и организаторов тренингов</a>
			<br />
			<br />
			<a href="/files/reglaments/wapp_ethical_guidelines.pdf" target="_blank">Ethical Guidelines</a>
		</div>
	);
};
export default Regulation;
