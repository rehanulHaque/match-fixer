"use server";
import { acceptRequest, rejectRequest } from "@/action/sendRequest";
import { auth } from "@/auth";
import { AcceptBtn, RejectBtn } from "@/components/AcceptRejectBtn";
import { Button } from "@/components/ui/button";
import { Request } from "@/models/request";
import { User } from "@/models/user";
import React from "react";

interface RequestTypes {
  _id: string;
  senderUserId: string;
  reciverUserId: string;
  teamId: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}

export default async function page() {
  const authUser = await auth();
  const myId = (await User.findOne({
    email: authUser?.user?.email,
  })) as RequestTypes;
  if (!myId) {
    return { redirect: "/login" };
  }
  const allRequest = await Request.find({ reciverUserId: myId._id });
  const allRequestParsed = JSON.parse(JSON.stringify(allRequest));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="text-2xl font-bold">All Request</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allRequestParsed.map((request: any) => {
            if (request.status === "pending")
              return (
                <div
                  key={request._id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h2 className="text-lg font-semibold">{request.teamId}</h2>
                  <p className="text-gray-600">Status: {request.status}</p>
                  <div className="flex justify-between mt-4">
                    <AcceptBtn id={request._id} />
                    <RejectBtn id={request._id} />
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
