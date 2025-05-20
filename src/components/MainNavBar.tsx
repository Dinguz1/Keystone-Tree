'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavBar() {
  const pathname = usePathname();

  const routes = [
    { href: '/', text: 'Home' },
    { href: '/rules', text: 'Rules' },
    { href: '/lore', text: 'Lore' },
    { href: '/skill-tree', text: 'Skill Trees' },
    { href: '/character-sheet', text: 'Character Sheet' },
    { href: '/equipment/items', text: 'Items' },
    { href: '/character-creation/spells', text: 'Spells' },
  ]

  if (pathname !== "/auth"){
    return(
      <div className = "stan-width text-center">
        {routes.map((route, key) => (
          <Link href={route.href} key={key}>
            <button>{route.text}</button>
          </Link>
        ))}
        <Link href= "/"> <button type ="button"> Logout</button> </Link>
      </div>
    )
  }
}