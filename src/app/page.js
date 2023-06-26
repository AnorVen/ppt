import Image from 'next/image';
import Swiper from '@/components/swiper';
import './page.scss';
import MainText from '../components/mainText';
import NewsBlock from '../components/newsBlock';

export default function Home() {
	return (
		<main className={'main'}>
			<Swiper />
			<div className="content-block">
				<MainText />
				<NewsBlock />
			</div>
		</main>
	);
}
