'use client'
import { usePathname } from "next/navigation";
import useWindowDimensions from "@/lib/hooks/useWIndowDimension";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function MainNavBar() {
  const pathname = usePathname();

  type Route = {
    txt: string,
    href?: string | undefined
    links: {
      txt: string,
      href: string
    }[]
  }

  const routes: Route[] = [
    {
      txt: 'Home',
      href: '/',
      links: []
    },
    {
      txt: 'System Rules',
      links: [
        { txt: 'Core Rules', href: '/rules/core' },
        { txt: 'Resting/Recovery', href: '/rules/resting-and-recovery' },
        { txt: 'Conditions', href: '/rules/conditions' },
        { txt: 'Exhaustion', href: '/rules/exhaustion' }
      ]
    }, 
    {
      txt: 'Character Creation',
      links: [
        { txt: 'Races', href: '/character/races' },
        { txt: 'Skill Trees', href: '/skill-trees' },
        { txt: 'Character Sheet', href: '/character/sheet' }
      ]
    },
    {
      txt: 'Resources',
      links: [
        { txt: 'Items', href: '/resources/items' },
        { txt: 'Spells', href: '/resources/spells' },
        { txt: 'General Lore', href: '/resources/lore' },
        { txt: 'Crafting', href: '/resources/crafting' }
      ]
    }
  ]

  const { width } = useWindowDimensions()

  if (pathname !== "/auth"){
    return(
        width && width < 728 ? (
          <MobileNavbar routes={routes} />
        ) : (
          <DesktopNavbar routes={routes} />
        )
    )
  }
}