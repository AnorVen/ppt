import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Provider } from 'react-redux';
import store from '@/components/store/store';

import './main.scss';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'ppt title',
	description: 'ppt description',
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">

		<body className={inter.className}>
		<Provider store={store}>
			<div className="wrapper">
				<Header />
				<div className="content">
					{children}
				</div>
				<Footer />
			</div>
		</Provider>
		</body>

		</html>
	);
}
