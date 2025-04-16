import Button from "@/components/Button"; 
import Link from "next/link";

export default function MainNavBar() {
    return(
        <div className="flex items-center justify-center">
        <Button text="Home" href="/" />
        <Button text="Rules" href="/Rules" />
        <Button text="Lore" href="/Lore" />
        <Button text="Skill Trees" href="/Skill-Tree" />
        <Link href= "/"> <button type ="button"> Logout</button> </Link>
      </div>
    )
}