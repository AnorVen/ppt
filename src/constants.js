//export const url = `https://ppt-russia.ru`;
export const url = `http://localhost:5000`;

export const base_themes = {
	base_them_1: 'Модуль 1: ВВЕДЕНИЕ В ППТ. АКТУАЛЬНЫЙ КОНФЛИКТ И ТЕКУЩАЯ ЖИЗНЕННАЯ СИТУАЦИЯ',
	base_them_2: 'Модуль 2: ОСНОВНЫЕ КОНЦЕПЦИИ КОНФЛИКТОВ И СЕМЬИ',
	base_them_3: 'Модуль 3: ПОЗИТИВНАЯ ПСИХОДИНАМИКА',
	base_them_4: 'Модуль 4: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	base_them_5: 'Модуль 5: ТЕРАПЕВТИЧЕСКИЕ ОТНОШЕНИЯ И ВЗАИМОДЕЙСТВИЕ',
};

export const master_themes = {
	master_them_1: 'Модуль 1: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_2: 'Модуль 2: ПСИХОДИНАМИКА в ППТ',
	master_them_3: 'Модуль 3: ПСИХОДИНАМИЧЕСКИЙ СЕТТИНГ И ВЗАИМООТНОШЕНИЯ в ППТ',
	master_them_4: 'Модуль 4: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_5: 'Модуль 5: ПСИХОДИНАМИЧЕСКИЙ ПРОЦЕСС в ППТ',
	master_them_6: 'Модуль 6: ПЕРВОЕ ИНТЕРВЬЮ в формате ППТ',
	master_them_7: 'Модуль 7: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_8: 'Модуль 8: ПЛАНИРОВАНИЕ ТЕРАПИИ и ИНТЕРВЕНЦИЙ в ППT',
	master_them_9: 'Модуль 9: ПСИХИЧЕСКИЕ РАССТРОЙСТВА (ЧАСТЬ 1)',
	master_them_10: 'Модуль 10: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_11: 'Модуль 11: ПСИХИЧЕСКИЕ РАССТРОЙСТВА (ЧАСТЬ II)',
	master_them_12: 'Модуль 12: ЛИЧНОСТЬ, ХАРАКТЕР И ТРАВМА',
	master_them_13: 'Модуль 13: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_14: 'Модуль 14: САЛЮТОГЕНЕЗ, ПСИХОСОМАТИКА, РАССТРОЙСТВА, СВЯЗАННЫЕ СО СТРЕССОМ',
	master_them_15: 'Модуль 15: МЕЖЛИЧНОСТНЫЕ КОНФЛИКТЫ. СЕМЕЙНАЯ И СУПРУЖЕСКАЯ ТЕРАПИЯ',
	master_them_16: 'Модуль 16: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
	master_them_17: 'Модуль 17: ПРИМЕНЕНИЕ ПОЗИТИВНОЙ ПСИХОТЕРАПИИ',
	master_them_18: 'Модуль 18: САМОПОЗНАНИЕ/САМОРАСКРЫТИЕ',
};

export const types = {
	basic_course: 'Базовый курс',
	master_course: 'Мастер курс',
	seminar: 'Семинар',
	master_class: 'Мастер-класс',
	conference: 'Конференция',
	additional_program: 'Дополнительная программа'
}
export const centers = [
	{
		title: 'Учебный Центр имени Н.П.Бехтеревой',
		city: 'Санкт-Петербург',
		website: 'psy.education',
		address: '195112, Санкт-Петербург, Таллинская ул, д. 10, лит. А, пом. 3-Н, каб. 5',
		phone: '+7812-467-45-80',
		id: '6499e2f5cf8f3d9c9c951163',
	},
	{
		id: '6499f95c36af5a507e2ae3ab',
		title: 'Центр психологического образования и организационного консультирования',
		city: 'Севастополь',
		website: '',
		address: '',
		phone: '',
	},
];

export const typeToThem = {
	basic_course: base_themes,
	master_course: master_themes,
}

export const courses = [
	{
		type: 'basic_course',
		main_trainer: '64d0f52784fd8d33c4a40b50',
		city: 'Санкт -Петербург',
		title: 'группа набора 2022 года',
		organizer: 'Елена Зенкова',
		organizer_contacts: '+7911-924-74-51',
		description: `Слушателям выдается диплом о профессиональной переподготовке для выполнения нового вида деятельности. 
		Новый вид деятельности: "Психологическое консультирование в методе Позитивная Транскультуральная Психотерапия"`,
		modules: [
			{
				module_number: 1,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['10.03.2023', '11.03.2023', '12.03.2023'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: 2,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['02.06.2023', '03.06.2023', '04.06.2023'],
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: 3,
				trainer: '64972d429bd3eac606b8f35e',
				dates: ['08.09.2023', '09.09.2023', '10.09.2023'],
				count: 30,
				them: 'base_them_4',
			}, {
				module_number: 4,
				trainer: '64972d7ca74dcb4dd4eed4ae',
				dates: ['15.12.2023', '16.12.2023', '17.12.2023'],
				count: 30,
				them: 'base_them_3',
			}, {
				module_number: 5,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['01.03.2024', '02.03.2024', '03.03.2024'],
				count: 30,
				them: 'base_them_5',
			},
		],
	},
	{
		type: 'basic_course',
		main_trainer: '64d0f52784fd8d33c4a40b50',
		city: 'Санкт -Петербург ',
		title: 'группа набора 2023 года',
		description: `Слушателям выдается диплом о профессиональной переподготовке для выполнения нового вида деятельности. 
		Новый вид деятельности: "Психологическое консультирование в методе Позитивная Транскультуральная Психотерапия"`,
		organizer: 'Елена Зенкова',
		organizer_contacts: '+7911-924-74-51',
		modules: [
			{
				module_number: 1,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['07.04.2023', '08.04.2023', '09.04.2023'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: 2,
				trainer: '64972d7ca74dcb4dd4eed4ae',
				dates: ['07.07.2023', '08.07.2023', '09.07.2023'],
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: 3,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['08.09.2023', '09.09.2023', '10.09.2023'],
				count: 30,
				them: 'base_them_3',
			}, {
				module_number: 4,
				trainer: '64972d429bd3eac606b8f35e',
				dates: ['15.12.2023', '16.12.2023', '17.12.2023'],
				count: 30,
				them: 'base_them_5',
			}, {
				module_number: 5,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['01.03.2024', '02.03.2024', '03.03.2024'],
				count: 30,
				them: 'base_them_4',
			},
		],
	},
	{
		type: 'basic_course',
		main_trainer: '64d0f52784fd8d33c4a40b50',
		city: 'Севастополь',
		title: '',
		description: ``,
		organizer: '64d0f52784fd8d33c4a40b50',
		organizer_contacts: '+7914-564-66-44',
		modules: [
			{
				module_number: 1,
				trainer: '64d0f52784fd8d33c4a40b50',
				date_start: '17.12.2022',
				date_end: '09.04.2023',
				dates: ['17.12.2022', '18.12.2022', '24.12.2022', '25.12.2022'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: 2,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['18.03.2023', '19.03.2023', '25.03.2023', '26.03.2023'],
				date_start: '07.07.2023',
				date_end: '09.07.2023',
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: 3,
				trainer: '64972d7ca74dcb4dd4eed4ae',
				dates: ['18.03.2023', '19.03.2023', '25.03.2023', '26.03.2023'],
				date_start: '08.09.2023',
				date_end: '10..09.2023',
				count: 30,
				them: 'base_them_3',
			}, {
				module_number:4,
				trainer: '64972d429bd3eac606b8f35e',
				dates: ['01.09.2023', '02.09.2023', '03.09.2023'],
				count: 30,
				them: 'base_them_5',
			}, {
				module_number: 5,
				trainer: '64d0f52784fd8d33c4a40b50',
				dates: ['02.12.2023', '03.12.2023', '09.12.2023', '10.12.2023'],
				count: 30,
				them: 'base_them_4',
			},
		],
	},
];

export const seminars = [
	{
		title: 'Психология здоровья, отношения с болезнью, истоки психосоматики',
		description: `<p>Ребенок растет и развивается в семье, которая для него является целым миром и проводником в большой мир. Представления о происходящем и правила жизни ребенок формирует в контакте со значимыми взрослыми. Как показывают современные научные исследования, состояние здоровья человека зависит не только от биологических факторов, но и от того, что явно или негласно транслируют родители.</p>  
		<p>Семейные концепции определяют становление феноменов: «Внутренняя картина здоровья» и «Внутренняя картина болезни» ; «Масштабы переживания болезни» ; «Типология отношения к болезни» как факторы формирования качества жизни и психосоматического здоровья человека в разных возрастах.</p>
		<p>В ходе групповой интерактивной работы мы приглашаем Вас встретиться со своими чувствами, осознать свои истинные желания и потребности, провести анализ собственных ресурсов здоровья, определить типологию отношения к здоровью и болезни, поставить вдохновляющие цели на будущее.</p>
		<p>Ключевые вопросы:</p>
		<ul>
			<li>Внутренняя картина здоровья и болезни,  роль семейных концепций в их формировании.</li>
			<li>Масштабы переживания болезни и типология отношения к болезни как факторы формирования качества жизни человека в разных возрастах.</li>
			<li>Психическое и психологическое здоровье человека, критерии и риски.</li>
			<li>Условия развития психического и психологического здоровья в детстве и последующих возрастах.</li>
			<li>Принципы Позитивной Психотерапии и теория развития личности. Базовые способности, как потенциал развития ребенка, последствия депривации.</li>
			<li>Концепции психосоматической патологии.</li>
			<li>Модель баланса в жизни как условие сохранения психического и психологического здоровья.</li>
		</ul>`,
		dates: ['03.11.2023', '04.11.2023', '05.11.2023'],
		type: 'seminar',
		count: '30',
		trainer: '64d0f52784fd8d33c4a40b50',
		organizer: 'Смирнова Светлана Викторовна',
		organizer_contacts: '+7914-564-66-44',
		organizer_center: '6499f95c36af5a507e2ae3ab',
		id: 'fawf2123'
	},
];

export const trainers = [
	{
		'password': 'smirnova2001@mail.ru',
		name: 'Светлана',
		second_name: 'Викторовна',
		surname: 'Смирнова',
		city: 'Санкт-Петербург',
		email: 'smirnova2001@mail.ru',
		phone: '+7914-564-66-44',
		description: '<span>Врач педиатр высшей квалификационной категории, врач психотерапевт, клинический психолог, кандидат психологических наук, доцент Амурского государственного университета и Севастопольского государственного университета. Тренер Международной Академии Позитивной Психотерапии, IAPP (Висбаден, Германия) <a>http://positum.org/training/trainers/</a>, действительный член  Всемирной ассоциации позитивной психотерапии (WAPP). Супервизор Российской психотерапевтической Ассоциации. <a>https://rpa-russia.ru/sovet-supervizorov-rpa/</a></span>',
		id: '64d0f2bc9e9c802989eefa88',
	},
	{
		name: 'Oksana',
		second_name: '',
		surname: 'Nikonova',
		city: '',
		email: '',
		phone: '',
		description: '',
		id: '64972d429bd3eac606b8f35e'
	},
	{
		name: 'Ekaterina',
		second_name: '',
		surname: 'Dokunova',
		city: '',
		email: '',
		phone: '',
		description: '',
		id: '64972d7ca74dcb4dd4eed4ae',
	},
];

export const constants = {
	trainers,
	courses,
	master_themes,
	base_themes,
	centers,
	seminars,
	types
};