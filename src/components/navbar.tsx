
import Link from "next/link";
import React from "react";

import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./signInButton";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./themeToggle";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2 mb-5">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Belajar.com
          </p>
        </Link>

        {/**Dark/Light mode */}
        <div className="flex items-center">
          <ThemeToggle className="mr-3" />
        
        {/**Fancy Sign In */}
        <div className="flex item-center">
          {session?.user ? 
          (<UserAccountNav user={session.user} />) 
            : 
          (<SignInButton text = "Sign In"/>)
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;