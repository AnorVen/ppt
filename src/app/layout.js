import './globals.css';
import { ProviderWrapper } from '@/components/provider';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

import './main.scss';
import 'semantic-ui-css/semantic.min.css'


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
		<ProviderWrapper>
			<div className="wrapper">
				<Header />
				<div className="wrapper-content">
					{children}
				</div>
				<Footer />
			</div>
		</ProviderWrapper>
		</body>
		</html>
	);
}
