import React from 'react'
import TeamCard from './TeamCard'

interface TeamList {
    teamName: string,
    location: string,
    time: string,
    playingSide: string,
    _id: string,
    available: boolean
  }
  

export default function TeamList(teamsAvailable: TeamList[]) {
  return (
    <div className="max-w-2xl mx-auto py-6">
        <div className="space-y-4">
          {teamsAvailable.map((team: any) => (
            <TeamCard team={team} key={team._id}/>
          ))}
        </div>
      </div>
  )
}
