"use client";

import TeamForm from "@/components/TeamForm";

export default function page() {
  return (
    <section className="w-full max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <div>
        <h1 className="text-2xl font-bold">Create Team</h1>
        <TeamForm type="create"/>
      </div>
    </section>
  )
}
