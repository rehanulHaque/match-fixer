"use client"
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { sendRequest } from "@/action/sendRequest";
import { toast } from "sonner"

const TeamCard = ({ team, myId }: any) => {
  const senderId = myId._id
  const receiverId = team.userId
  const sendTeamId = team._id
  const {handleSubmit} = useForm()
  const onSubmit = async() => {
    const message = await sendRequest(senderId, receiverId, sendTeamId)
    toast(message?.message)
  }
  return (
    <div
      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-xl font-bold mb-2">{team.title}</h2>
      <div className="space-y-1">
        <p className="text-xl font-semibold">{team.teamName}</p>
        <p>Location: {team.location}</p>
        <p>Time: {team.time}</p>
        <p>Playing side: {team.playingSide}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Button className="mt-4" type="submit">Send Request</Button>
      </form>
    </div>
  );
};

export default TeamCard;
