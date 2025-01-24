import FilterButton from "@/components/FilterButton";
import TeamCard from "@/components/TeamCard";
import TeamList from "@/components/TeamList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { connectToDatabase } from "@/lib/ConnectDB";
import { Team } from "@/models/team";
import Link from "next/link";
import {auth} from "@/auth"
import { User } from "@/models/user";
import { redirect } from "next/navigation";

interface TeamList {
  teamName: string,
  location: string,
  time: string,
  playingSide: string,
  _id: string,
  available: boolean
}

export default async function TeamsPage() {
  await connectToDatabase();
  const teamsAvailable = await Team.find({available: true}) as TeamList[];
  const myGoogleEmail = await auth()
  const myId = await User.findOne({email: myGoogleEmail?.user?.email})
  // if(!myGoogleEmail) {
  //   redirect("/login")
  // }

  
  return (
    <section className="bg-white text-black">
      <div className="grid grid-cols-6 p-4 pt-2 gap-4 border-b border-gray-200">
        <FilterButton/>
        <div className="col-span-3">
          <Input 
            placeholder="Search" 
            className="border-gray-300 focus:ring-0 focus:border-black"
          />
        </div>
        <Button 
          variant="outline" 
          className="col-span-1 border-black hover:bg-gray-100"
        >
          <Link href="/request-match" className="text-black">
            Request Match
          </Link>
        </Button>
        <Button
          className="col-span-1"
        >
          <Link href="/chat">
            Chat
          </Link>
        </Button>
      </div>
      
      <div className="max-w-2xl mx-auto py-6">
        <div className="space-y-4">
          {teamsAvailable.map((team: any) => (
            <TeamCard team={JSON.parse(JSON.stringify(team))} key={team._id} myId={JSON.parse(JSON.stringify(myId))}/>
          ))}
        </div>
      </div>
    </section>
  );
}