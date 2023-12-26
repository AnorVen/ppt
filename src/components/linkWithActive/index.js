'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkWithActive = ({ href, target=null, children, onClick, className = '' }) => {
	const pathname = usePathname();
	const isActive = (href) => pathname.startsWith(href)
	return <Link className={`${className} ${isActive(href) ? ' active' : ''}`} href={href} target={target} onClick={onClick}>{children}</Link>
}

export default LinkWithActive
