import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopic from '@/components/dashboard/HotTopic'
import NewQuiz from '@/components/dashboard/NewQuiz'
import RecentActivity from '@/components/dashboard/RecentActivity'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata = {
    title: "Dashboard | Belajar.com"
}
const dashboard = async (props: Props) => {
        const session = await getAuthSession()
        if(!session?.user){
            return redirect('/');
        }
    return (
        <main className='px-6 py-10 mx-auto max-w-7xl'>
            <div className="flex items-center">
                <h2 className='mr-2 text-4xl font-mono font-bold tracking-tight'>Belajar.Com</h2>
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2">
                <NewQuiz />
                <HistoryCard />
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2">
                 <HotTopic />
                 <RecentActivity />       
            </div>
        </main>
  )
}

export default dashboard