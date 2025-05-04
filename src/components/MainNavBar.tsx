'use client'
import Button from "@/components/Button"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavBar() {
  const pathname = usePathname();
  if (pathname !== "/Auth"){
    return(
      <div className = "stan-width text-center">
        <Button text="Home" href="/"/>
        <Button text="Rules" href="/rules"/>
        <Button text="Lore" href="/lore"/>
        <Button text="Skill Trees" href="/skill-tree"/>
        <Button text="Character Sheet" href="/dead-end"/>
        <Button text="Items" href="/equipment/items"/>
        <Button text="Spells" href="/character-creation/spells"/>
        <Link href= "/"> <button type ="button"> Logout</button> </Link>
      </div>
    )
  }
}