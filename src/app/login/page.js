'use client'
import { CHECK_AUTH } from '@/components/actions';
import { sagaActions } from '@/components/sagaActions';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ params }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.main.user);
	useEffect(() => {
		if (localStorage.getItem('token') && !user._id){
			dispatch({ type: sagaActions.CHECK_AUTH });
		} else {
			Router.push('/profile');
			return null
		}
	}, []);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () =>{
		if (email && password){
			dispatch({ type: sagaActions.LOGIN, payload: {
					email, password
				}
			});
		}
	}
	return (
		<div className="wrapper_text">
			<div>Доступ для тренеров</div>
			<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
			<input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
			<button onClick={handleLogin}>Войти</button>
		</div>



	);
};
export default Login;