"use server"

import { Request } from "@/models/request"


export const sendRequest = async (senderId: string, receiverId: string, sendTeamId: string) => {
    try{
        const request = await Request.create({senderUserId: senderId, reciverUserId: receiverId, teamId: sendTeamId})
        return {
            message: "Request send"
        }
    } catch(e: any) {
        console.log(e)
    }
}

export const acceptRequest = async (requestId: string) => {
    try {
        console.log(requestId)
        const request = await Request.findByIdAndUpdate(requestId, {status: "accepted"})
        return {
            message: "Request accepted"
        }
    } catch(e: any) {
        console.log(e)
    }
}

export const rejectRequest = async (requestId: string) => {
    try {
        console.log(requestId)
        const request = await Request.findByIdAndUpdate(requestId, {status: "rejected"})
        return {
            message: "Request rejected"
        }
    }
    catch(e: any) {
        console.log(e)
    }
}