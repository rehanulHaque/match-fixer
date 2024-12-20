import Link from "next/link";
import { Button } from "./ui/button";
import {createClient} from '@/utils/supabase/server'
import { redirect } from "next/navigation";
import { logout } from "@/action/auth";

export const Navbar = async() => {
    const data = await await (await createClient()).auth.getUser()
    if(!data) {
        redirect("/login")
    }

  return (
    <nav className="flex p-4 justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">FTBL</h1>
      {data.data.user?.id ? (
        <Button onClick={logout}>Logout</Button>
      ): (
        <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
      )}
    </nav>
  );
};
