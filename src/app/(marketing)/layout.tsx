import { PropsWithChildren } from 'react'
import { Navbar } from '@/app/(marketing)/_components/navbar'

const MarketingLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="h-full dark:bg-[#1F1F1F]">
			<Navbar />
			<main className="h-full pt-40">{children}</main>
		</div>
	)
}

export default MarketingLayout
