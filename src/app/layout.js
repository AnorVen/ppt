import './globals.css';
import { ProviderWrapper } from '@/components/provider';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

import './main.scss';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'ppt title',
	description: 'ppt description',
};

export default function RootLayout({ children }) {
	console.log(123123);
	return (
		<html lang="ru">

		<body className={inter.className}>
		<ProviderWrapper>
			<div className="wrapper">
				<Header />
				<div className="content">
					{children}
				</div>
				<Footer />
			</div>
		</ProviderWrapper>
		</body>
		</html>
	);
}
