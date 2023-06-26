'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkWithActive = ({ href, target=null, children }) => {
	const pathname = usePathname();
	const isActive = (href) => pathname.startsWith(href)
	return <Link className={isActive(href) ? 'active' : ''} href={href} target={target}>{children}</Link>
}

export default LinkWithActive
