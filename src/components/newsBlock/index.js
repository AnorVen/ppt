"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const NewsBlock = () => {
	const [newses, getMews] = useState([]);
	useEffect(() => {
		getMewsRequest();
	}, []);
	const getMewsRequest = () => {
		getMews([{
			title: 'новая новость1',
			shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis ea eaque officiis possimus quas ullam. Distinctio itaque nesciunt quasi qui temporibus. Aliquam excepturi mollitia, officia quibusdam suscipit ut?',
			uuid: 'uuid1'
		},
			{
				title: 'новая новость2',
				shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis ea eaque officiis possimus quas ullam. Distinctio itaque nesciunt quasi qui temporibus. Aliquam excepturi mollitia, officia quibusdam suscipit ut?',
				uuid: 'uuid2'
			},
			{
				title: 'новая новость3',
				shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid blanditiis ea eaque officiis possimus quas ullam. Distinctio itaque nesciunt quasi qui temporibus. Aliquam excepturi mollitia, officia quibusdam suscipit ut?',
				uuid: 'uuid2'
			}]);
	};


	return <div className='news-block'>
		{newses.map(news => {
			return <div key={news.uuid}>
				<div>
					{news.title}
				</div>
				<div>{news.shortText}</div>
				<Link href={`/news/${news.uuid}`}>Читать дальше</Link>
			</div>;
		})}
	</div>;
};

export default NewsBlock;