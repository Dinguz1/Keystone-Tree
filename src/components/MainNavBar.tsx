'use client'
import Button from "@/components/Button"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavBar() {
  const pathname = usePathname();
  if (pathname !== "/Auth"){
    return(
        <div className="flex items-center justify-center">
        <Button text="Home" href="/"/>
        <Button text="Rules" href="/Rules"/>
        <Button text="Lore" href="/Lore"/>
        <Button text="Skill Trees" href="/Skill-Tree"/>
        <Button text="Character Sheet" href="/DeadEndPage"/>
        <Button text="Items" href="/DeadEndPage"/>
        <Button text="Spells" href="/DeadEndPage"/>
        <Link href= "/"> <button type ="button"> Logout</button> </Link>
      </div>
    )
  }
}