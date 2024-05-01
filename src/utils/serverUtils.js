'use server'
import { revalidatePath } from 'next/cache';
export const revalidateCenters = ()=>{
	revalidatePath('/centers', 'layout')
}
