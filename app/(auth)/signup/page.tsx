"use client";
import { signup } from "@/action/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  return (
    <section className="flex items-center mt-10 justify-center">
      <form
        onSubmit={handleSubmit((data: { email: string; password: string }) =>
          signup(data)
        )}
        className="flex flex-col border border-black rounded-md p-4 gap-4"
      >
        <h1 className="text-2xl font-bold">Create your account</h1>
        <div>
          <Input {...register("email")} placeholder="Email" />
        </div>
        <div>
          <Input {...register("password")} placeholder="Password" />
        </div>
          <Button>Signup</Button>
        <div>
          <p>
            Already have an account{" "}
            <Link href={"/login"} className="text-blue-800">
              Login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
