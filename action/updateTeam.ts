"use server";

import { auth } from "@/auth";
import { Team } from "@/models/team";
import { User } from "@/models/user";
import { redirect } from "next/navigation";

export const updateTeam = async (data: {
  teamName: string;
  playingSide: number;
  location: string;
  time: string;
  phone: number;
  available?: boolean;
  alreadyFixed?: boolean;
}) => {
  const { 
    teamName, 
    playingSide, 
    location, 
    time, 
    phone,
    available,
    alreadyFixed
  } = data;
  
  try {
    const authUser = await auth();
    const userId = await User.findOne({ email: authUser?.user?.email });

    const updatedTeam = await Team.findOneAndUpdate(
      { userId: userId?._id }, 
      {
        teamName,
        playingSide,
        location,
        time,
        phone,
        available,
        alreadyFixed
      },
      { new: true }
    );

    if(updatedTeam){
        redirect("/request-match")
    }
  } catch (e: any) {
    console.log(e.message);
  }
};