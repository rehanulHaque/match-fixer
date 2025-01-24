import { auth } from "@/auth";
import TeamForm from "@/components/TeamForm";
import { Button } from "@/components/ui/button";
import { Team } from "@/models/team";
import { User } from "@/models/user";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await auth();
  const authUser = await User.findOne({ email: data?.user?.email });
  const myTeam = await Team.findOne({ userId: authUser._id });
  if (!myTeam) {
    return (
      <div className="mt-10 mx-auto text-center w-full">
        <h1 className="font-semibold text-xl mb-2">You don't have any team create one.</h1>
        <Button>
          <Link href="/create-team">Create Team</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <section className="p-8 bg-white shadow-md rounded-lg max-w-2xl mx-auto mt-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Team</h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <TeamForm type="update" team={JSON.parse(JSON.stringify(myTeam))} />
        </div>
      </div>
    </section>
  );
}
