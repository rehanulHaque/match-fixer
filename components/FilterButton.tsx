"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function FilterButton() {
  return (
    <div className="col-span-1 border border-black flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger>Filter</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Location</DropdownMenuItem>
          <DropdownMenuItem>Time</DropdownMenuItem>
          <DropdownMenuItem>Playing Side</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
