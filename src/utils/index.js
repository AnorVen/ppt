'use client';
const testLocalStorage = {};
const storage = {
	getItem: (key) => {
		return testLocalStorage[key] || false;
	},
	setItem: (key, val) => {
		testLocalStorage[key] =  val;
	},
	removeItem: (key) => {
		delete testLocalStorage[key];
	},
};

export const getToken = () => {
	return storage.getItem('token');
};

export const getSuperUser = () => {
	return storage.getItem('superUser');
};
export const logout = () => {
	storage.removeItem('token');
};
export const setSuperUser = (superUser) => {
	return storage.setItem('superUser', superUser);
};

export const setToken = (token) => {
	if (typeof window !== 'undefined') {
		storage.setItem('token', token);
	}
};

export const auth = async (email, password) => {
	return {
		error: false,
		payload: {
			user: {
				uuid: 'test_uuid',
				name: 'test_name',
				phone: '+7999999999',
				email: 'test_mail@mail.ru',
				city: 'test_city',
				center: 'test_center',
				token: 'test_token',
				isSuperUser: false,
			},
		},
		success: true,
	};
};

export const getUser = () => {
	return storage?.getItem('user') || { uuid: '1' };
};

export const setUser = (user = {
	uuid: 'test_uuid',
	name: 'test_name',
	phone: '+7999999999',
	email: 'test_mail@mail.ru',
	city: 'test_city',
	center: 'test_center',
	token: 'test_token',
	superUser: false,
}) => {
	//storage.setItem('user', user)
	Object.entries(user).map(([key, value]) => {
		storage.setItem(`user.${key}`, value);
	});
	setSuperUser(user.superUser);
	setToken(user.token);
};
