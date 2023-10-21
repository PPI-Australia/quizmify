import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'


type Props = {}

const RecentActivity = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Recent Challenge</CardTitle>
      <CardDescription>
        You have played a total of 7 games
      </CardDescription>
        <CardContent className='max-h-[500px] overflow-scroll '>
            History
        </CardContent>
      </CardHeader>
      </Card>
  )
}

export default RecentActivity