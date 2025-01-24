"use client"
import React from 'react'
import { Button } from './ui/button'
import { acceptRequest, rejectRequest } from '@/action/sendRequest'

export function AcceptBtn(id: any) {

  return (
    <form action={() => {
        acceptRequest(id.id)
    }}>
      <Button type="submit">Accept</Button>
    </form>
  )
}

export function RejectBtn(id: any) {
    return (
      <form action={() => {
          rejectRequest(id.id)
      }}>
        <Button type="submit">Reject</Button>
      </form>
    )
  }