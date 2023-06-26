const trainers = [
	{
		name: 'Светлана',
		second_name: 'Викторовна',
		surname: 'Смирнова',
		city: 'Санкт-Петербург',
		email: 'smirnova2001@mail.ru',
		phone: '+7914-564-66-44',
		description: '<span>Врач педиатр высшей квалификационной категории, врач психотерапевт, клинический психолог, кандидат психологических наук, доцент Амурского государственного университета и Севастопольского государственного университета. Тренер Международной Академии Позитивной Психотерапии, IAPP (Висбаден, Германия) <a>http://positum.org/training/trainers/</a>, действительный член  Всемирной ассоциации позитивной психотерапии (WAPP). Супервизор Российской психотерапевтической Ассоциации. <a>https://rpa-russia.ru/sovet-supervizorov-rpa/</a></span>',
		id: 123456,
	},
	{
		name: 'Oksana',
		second_name: '',
		surname: 'Nikonova',
		city: '',
		email: '',
		phone: '',
		description: '',
		id: 123457,
	},
	{
		name: 'Ekaterina',
		second_name: '',
		surname: 'Dokunova',
		city: '',
		email: '',
		phone: '',
		description: '',
		id: 123458,
	},
];

const base_thems = [
	{
		title: 'тема 1',
		key: 'base_them_1',
	},
	{
		title: 'тема 2',
		key: 'base_them_2',
	},
	{
		title: 'тема 3',
		key: 'base_them_3',
	},
	{
		title: 'тема 4',
		key: 'base_them_4',
	},
	{
		title: 'Self-discovery',
		key: 'base_self_discovery',
	},
];

const master_thems = [
	{
		title: 'тема 1',
		key: ' master_them_1',
	},
	{
		title: 'тема 2',
		key: ' master_them_2',
	},
	{
		title: 'тема 3',
		key: ' master_them_3',
	},
	{
		title: 'тема 4',
		key: ' master_them_4',
	},
	{
		title: 'тема 5',
		key: ' master_them_5',
	},
	{
		title: 'тема 6',
		key: ' master_them_6',
	},
	{
		title: 'тема 7',
		key: ' master_them_7',
	},
	{
		title: 'тема 8',
		key: ' master_them_8',
	},
	{
		title: 'тема 9',
		key: ' master_them_9',
	},
	{
		title: 'тема 10',
		key: ' master_them_10',
	},
	{
		title: 'Self-discovery',
		key: ' master_self_discovery',
	},
];
const centesrs = [
	{
		name: 'Учебный Центр имени Н.П.Бехтеревой',
		city: 'Санкт-Петербург',
		website: 'psy.education',
		address: '195112, Санкт-Петербург, Таллинская ул, д. 10, лит. А, пом. 3-Н, каб. 5',
		phone: '+7812-467-45-80',
		id: 2221,
	},
	{
		id: 2222,
		name: 'Центр психологического образования и организационного консультирования',
		city: 'Севастополь',
		website: '',
		address: '',
		phone: '',
	},
];
const courses = [
	{
		type: 'base',
		main_trainer: 123456,
		city: 'Санкт -Петербург',
		title: 'группа набора 2022 года',
		organizer: 'Елена Зенкова',
		organizer_contacts: '+7911-924-74-51',
		description: `Слушателям выдается диплом о профессиональной переподготовке для выполнения нового вида деятельности. 
		Новый вид деятельности: "Психологическое консультирование в методе Позитивная Транскультуральная Психотерапия"`,
		modules: [
			{
				module_number: '1',
				trainer: 123456,
				dates: ['10.03.2023', '11.03.2023', '12.03.2023'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: '2',
				trainer: 123456,
				dates: ['02.06.2023', '03.06.2023', '04.06.2023'],
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: 'Self-discovery',
				trainer: 123457,
				dates: ['08.09.2023', '09.09.2023', '10.09.2023'],
				count: 30,
				them: 'base_self_discovery',
			}, {
				module_number: '3',
				trainer: 123458,
				dates: ['15.12.2023', '16.12.2023', '17.12.2023'],
				count: 30,
				them: 'base_them_3',
			}, {
				module_number: '4',
				trainer: 123456,
				dates: ['01.03.2024', '02.03.2024', '03.03.2024'],
				count: 30,
				them: 'base_them_4',
			},
		],
	},
	{
		type: 'base',
		main_trainer: 123456,
		city: 'Санкт -Петербург ',
		title: 'группа набора 2023 года',
		description: `Слушателям выдается диплом о профессиональной переподготовке для выполнения нового вида деятельности. 
		Новый вид деятельности: "Психологическое консультирование в методе Позитивная Транскультуральная Психотерапия"`,
		organizer: 'Елена Зенкова',
		organizer_contacts: '+7911-924-74-51',
		modules: [
			{
				module_number: '1',
				trainer: 123456,
				dates: ['07.04.2023', '08.04.2023', '09.04.2023'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: '2',
				trainer: 123458,
				dates: ['07.07.2023', '08.07.2023', '09.07.2023'],
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: '3',
				trainer: 123456,
				dates: ['08.09.2023', '09.09.2023', '10.09.2023'],
				count: 30,
				them: 'base_them_3',
			}, {
				module_number: 'Self-discovery',
				trainer: 123457,
				dates: ['15.12.2023', '16.12.2023', '17.12.2023'],
				count: 30,
				them: 'base_self_discovery',
			}, {
				module_number: '4',
				trainer: 123456,
				dates: ['01.03.2024', '02.03.2024', '03.03.2024'],
				count: 30,
				them: 'base_them_4',
			},
		],
	},
	{
		type: 'base',
		main_trainer: 123456,
		city: 'Севастополь',
		title: '',
		description: ``,
		organizer: 123456,
		organizer_contacts: '+7914-564-66-44',
		modules: [
			{
				module_number: '1',
				trainer: 123456,
				date_start: '17.12.2022',
				date_end: '09.04.2023',
				dates: ['17.12.2022', '18.12.2022', '24.12.2022', '25.12.2022'],
				count: 30,
				them: 'base_them_1',
			}, {
				module_number: '2',
				trainer: 123456,
				dates: ['18.03.2023', '19.03.2023', '25.03.2023', '26.03.2023'],
				date_start: '07.07.2023',
				date_end: '09.07.2023',
				count: 30,
				them: 'base_them_2',
			}, {
				module_number: '3',
				trainer: 123458,
				dates: ['18.03.2023', '19.03.2023', '25.03.2023', '26.03.2023'],
				date_start: '08.09.2023',
				date_end: '10..09.2023',
				count: 30,
				them: 'base_them_3',
			}, {
				module_number: 'Self-discovery',
				trainer: 123457,
				dates: ['01.09.2023', '02.09.2023', '03.09.2023'],
				count: 30,
				them: 'base_self_discovery',
			}, {
				module_number: '4',
				trainer: 123456,
				dates: ['02.12.2023', '03.12.2023', '09.12.2023', '10.12.2023'],
				count: 30,
				them: 'base_them_4',
			},
		],
	},
];

const seminars = [
	{
		title: 'Психология здоровья, отношения с болезнью, истоки психосоматики',
		description: `<p>Ребенок растет и развивается в семье, которая для него является целым миром и проводником в большой мир. Представления о происходящем и правила жизни ребенок формирует в контакте со значимыми взрослыми. Как показывают современные научные исследования, состояние здоровья человека зависит не только от биологических факторов, но и от того, что явно или негласно транслируют родители.</p>  
		<p>Семейные концепции определяют становление феноменов: «Внутренняя картина здоровья» и «Внутренняя картина болезни» ; «Масштабы переживания болезни» ; «Типология  отношения к болезни» как факторы формирования качества жизни и психосоматического здоровья  человека в разных возрастах.</p>
		<p>В ходе групповой интерактивной работы мы приглашаем Вас встретиться со своими чувствами, осознать свои истинные желания и потребности, провести анализ собственных ресурсов здоровья, определить типологию отношения к здоровью и болезни,  поставить вдохновляющие цели на будущее.</p>
		<p>Ключевые вопросы:</p>
		<ul>
			<li>Внутренняя картина здоровья и болезни ,  роль семейных концепций в их формировании.</li>
			<li>Масштабы переживания болезни и  типология  отношения к болезни как факторы формирования качества жизни человека в разных возрастах.</li>
			<li>Психическое и психологическое здоровье человека, критерии и риски.</li>
			<li>Условия развития психического и психологического здоровья в детстве и последующих возрастах.</li>
			<li>Принципы Позитивной Психотерапии и теория развития личности. Базовые способности, как потенциал развития ребенка, последствия депривации.</li>
			<li>Концепции психосоматической патологии.</li>
			<li>Модель баланса в жизни как условие сохранения психического и психологического здоровья.</li>
		</ul>
`,
		dates: ['03.11.2023', '04.11.2023', '05.11.2023'],
		type: 'Групповая',
		count: '30',
		organizer: 123456,
		organizer_contacts: '+7914-564-66-44',
		organizer_center: 2222

	},
]

const bd = {
	trainers,
	courses,
	master_thems,
	base_thems,
	centesrs,
};