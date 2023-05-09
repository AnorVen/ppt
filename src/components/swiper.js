'use client';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import Link from 'next/link';
import Image from 'next/image';
import Img1 from '@/images/1.png';
import Img2 from '@/images/2.png';
import Img3 from '@/images/3.png';
// Import Swiper styles
import 'swiper/css';
import './swiper.scss';

export default () => {
	return (
		<div className="swiper-block">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				autoplay={{
					delay: 5000,
					pauseOnMouseEnter: true,
				}}
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				loop
			>
				<SwiperSlide>
					<Link href="/">
						<div className="slide">
							<Image src={Img1} />
							<p className="swiper_text">города ППТ России</p>
						</div>
					</Link>


				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<div className="slide">
							<Image src={Img2} />
							<p className="swiper_text">этический комитет</p>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<div className="slide">
							<Image src={Img3} />
							<p className="swiper_text">ближайший конгресс</p>
						</div>
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};