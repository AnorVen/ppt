'use client';
import { auth, setUser } from '@/utils';
import { useRouter } from 'next/navigation';

const Login = () => {
	const Router = useRouter();

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		const email = form.email.value;
		const password = form.password.value;
		if (email && password) {
			const { success, error, payload } = await auth(email, password);
			if (error) {
				alert('неверный логин или пароль');
			}
			if (success) {
				setUser(payload.user);
				Router.push('/profile');
			}
		}
	};

	return (
		<div>Login
			<form onSubmit={handleSubmit}>
				<div>
					<div>Почта</div>
					<input type="text" name="email" />
				</div>
				<div>
					<div>Пароль</div>
					<input type="password" name="password" />
				</div>
				<button type="submit">Войти</button>
			</form>
		</div>

	);
};
export default Login;