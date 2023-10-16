'use client'
import { sagaActions } from '@/components/sagaActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation'

const Login = ({ params }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.main.user);
	const isAuth = useSelector(state => state.main.isAuth);
	const redirectToProfile =  () => redirect('/profile')
	useEffect(() => {
		console.log(localStorage.getItem('token'));
		console.log(user);
		if (localStorage.getItem('token') && !user.id){
			dispatch({ type: sagaActions.CHECK_AUTH });
		} else {
			redirectToProfile()
			return null
		}
	}, []);

	useEffect(()=>{
		if (isAuth && localStorage.getItem('token') && user.id){
			redirectToProfile()
		}
	}, [isAuth])

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () =>{
		if (email && password){
			dispatch({ type: sagaActions.LOGIN, payload: {
					email,
					password,
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