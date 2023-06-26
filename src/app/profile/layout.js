import HeaderProfile from '@/components/headerProfile';
import { Inter } from 'next/font/google';
import './layout.scss'

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'ppt title',
	description: 'ppt description',
};

export default function ProfileLayout({ children }) {
	return (
		<>
			<HeaderProfile />
			<div className="profile-wrapper">
				{children}
			</div>
		</>
	);
}
