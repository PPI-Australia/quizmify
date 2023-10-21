import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {BsClipboardCheckFill} from 'react-icons/bs'

type Props = {}

const HistoryCard = (props: Props) => {
  return (
    <Card className='hover:cursor-pointer hover:opacity-75'>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-2xl font-bold'>Past Challenge </CardTitle>
            <BsClipboardCheckFill />
        </CardHeader>
        <CardContent>
        <p className="text-sm text-muted-foreground">
          See your record challenge
        </p>
      </CardContent>
    </Card>
  )
}

export default HistoryCard