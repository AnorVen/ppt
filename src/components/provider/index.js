'use client'
import store from '@/components/store/store';
import { Provider } from 'react-redux';

const ProviderWrapper  = ({children})=>{
	return <Provider store={store}>
		{children}
	</Provider>
}
export {ProviderWrapper}