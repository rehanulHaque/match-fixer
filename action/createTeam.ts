"use server";

import { auth } from "@/auth";
import { Team } from "@/models/team";
import { User } from "@/models/user";
import { redirect } from "next/navigation";

export const createTeam = async (data: {
  teamName: string;
  playingSide: number;
  location: string;
  time: string;
  phone: number;
}) => {
  const { teamName ,playingSide, location, time, phone } = data;
  try {
    const authUser = await auth();
    const userId = await User.findOne({ email: authUser?.user?.email });
    const team = await Team.create({
      teamName,
      playingSide,
      location,
      time,
      phone,
      userId: userId?._id,
    });
    if(team){
        redirect("/request-match")
    }
  } catch (e: any) {
    console.log(e.message);
  }
};
