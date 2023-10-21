"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {FaBrain} from 'react-icons/fa'
import { useRouter } from "next/navigation";
type Props = {}

const NewQuiz = (props: Props) => {
  const router = useRouter();
  return (
    <Card className='hover:cursor-pointer hover:opacity-75' onClick={() => {
      router.push("/quiz");
    }}>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-2xl font-bold'>New Challenge </CardTitle>
            <FaBrain />
        </CardHeader>
        <CardContent>
        <p className="text-sm text-muted-foreground">
          Challenge yourself to a quiz with a topic of your choice.
        </p>
      </CardContent>
    </Card>
  )
}

export default NewQuiz