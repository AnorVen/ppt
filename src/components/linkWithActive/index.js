'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default ({href, target=null, children}) => {
	const pathname = usePathname();
	const isActive = (href) => pathname.startsWith(href)
	return <Link className={isActive(href) ? 'active' : ''} href={href} target={target}>{children}</Link>
}