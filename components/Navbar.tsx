import Link from "next/link";
import { Button } from "./ui/button";
import { logout } from "@/action/auth";
import { auth } from "@/auth";

export const Navbar = async () => {
  const data = await auth();
  return (
    <nav className="flex p-4 py-3 justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">FTBL</h1>
      {data?.user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </nav>
  );
};
