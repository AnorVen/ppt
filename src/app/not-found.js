'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page404 = () =>{
	const router = useRouter();
	useEffect(()=>{
		router.push('/');
	}, [])
	return(
		<div>
			404
		</div>
	)
}

export default Page404
