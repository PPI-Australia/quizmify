import Navbar from "@/components/navbar";
import SignInButton from "@/components/signInButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if(session?.user){
    //if the user has history with us, reload the activity
    redirect('/dashboard')
  }

  return (
   <div className="h-screen flex items-center justify-center">
      <Card className="w-[400px] ">
        <CardHeader>
          <CardTitle>Welcome to Belajar.Com!</CardTitle>
          <CardDescription>
            Belajar.Com is a quiz app that allows you to create and share quizzes
            with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google!" />
        </CardContent>
      </Card>
   </div>
  )
}
