"use client";
import { createTeam } from "@/action/createTeam";
import { updateTeam } from "@/action/updateTeam";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const TeamFormSchema = z.object({
  teamName: z.string().min(1, "Team name is required"),
  playingSide: z.number().min(1, "Playing side must be a positive number"),
  location: z.string().min(1, "Location is required"),
  time: z.string(),
  phone: z.number().min(1000000000, "Invalid phone number"),
  available: z.boolean().optional(),
  alreadyFixed: z.boolean().optional(),
});

interface TeamFormProps {
  type: "create" | "update";
  team?: {
    teamName: string;
    playingSide: number;
    location: string;
    time: string;
    phone: number;
    available: boolean;
    alreadyFixed: boolean;
  };
}

export default function TeamForm({ type, team }: TeamFormProps) {
  const { 
    handleSubmit, 
    register, 
    control,
    formState: { errors } 
  } = useForm<z.infer<typeof TeamFormSchema>>({
    resolver: zodResolver(TeamFormSchema),
    defaultValues: type === "update" ? team : {}
  });

  const onSubmit = async (data: z.infer<typeof TeamFormSchema>) => {
    if (type === "create") {
      await createTeam(data);
    } else {
      await updateTeam(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-y-4 flex-col">
      <div>
        <Input
          {...register("teamName")}
          placeholder="Team Name"
        />
        {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
      </div>

      <div>
        <Input
          {...register("playingSide", { valueAsNumber: true })}
          type="number"
          placeholder="Playing Side"
        />
        {errors.playingSide && <p className="text-red-500">{errors.playingSide.message}</p>}
      </div>
      
      <div>
        <Input
          {...register("location")}
          type="text"
          placeholder="Location"
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
      </div>
      
      <div>
        <Input
          {...register("time")}
          type="time"
          placeholder="Time"
        />
        {errors.time && <p className="text-red-500">{errors.time.message}</p>}
      </div>
      
      <div>
        <Input
          {...register("phone", { valueAsNumber: true })}
          type="number"
          placeholder="Phone"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      
      {type === "update" && (
        <div className="flex items-center gap-2">
          <Controller
            name="available"
            control={control}
            render={({ field: { value, onChange } }) => (
              <>
                <label>Ready to play</label>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                />
              </>
            )}
          />
        </div>
      )}
      
      {type === "create" && (
        <div className="text-sm text-gray-400">
          <p>By default your team is already ready to play. You can change it on <Link href="/request-match">request match</Link> page.</p>
        </div>
      )}
      
      <Button type="submit">{type === "create" ? "Create" : "Update"}</Button>
    </form>
  );
}