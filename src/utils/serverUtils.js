'use server'
import { revalidatePath, revalidateTag } from 'next/cache';
export const revalidateCenters = ()=>{
	revalidateTag('centers')
}

export const revalidateCities = ()=>{
	revalidateTag('city')
}

export const revalidateCourse = ()=>{
	revalidateTag('course')
}

export const revalidateSeminar = ()=>{
	revalidateTag('seminar')
}

export const revalidateUsers = ()=>{
	revalidateTag('user')
}

export const revalidateNews = ()=>{
	revalidateTag('news')
}

export const revalidateEthical = ()=>{
	revalidateTag('ethical')
}
