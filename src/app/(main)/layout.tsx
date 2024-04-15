'use client'

import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import styles from './layout.module.css'

import { Spinner } from '@/components/ui'
import { SearchCommand } from "@/components/search-command";

import { Navigation } from './_components/navigation'
import { cn } from '@/lib'
import { useMediaQuery } from 'usehooks-ts'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth()
	const isMobile = useMediaQuery('(max-width: 768px)')

	if (isLoading) {
		return (
			<div className="h-full flex items-center justify-center">
				<Spinner size="lg" />
			</div>
		)
	}

	if (!isAuthenticated) {
		return redirect('/')
	}

	return (
		<div className={cn(!isMobile && styles.wrapper, 'dark:bg-[#1F1F1F] h-full')}>
			<Navigation />
			<main className={'dark:bg-[#1F1F1F]'}>
				<SearchCommand />
				{children}
			</main>
		</div>
	)
}

export default MainLayout
