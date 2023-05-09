import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import './main.scss'
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
		<div className='wrapper'>
			<Header />
			<div className="content">
				{children}
			</div>
			<Footer />
		</div>

		</body>

		</html>
	);
}
