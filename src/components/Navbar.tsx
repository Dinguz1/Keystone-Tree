'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";

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

  if (pathname !== "/auth"){
    return(
      <div className="stan-width text-center">
        {routes.map(({ txt, href, links }, key) => (
          <Dropdown key={key} backdrop="blur" >
            <DropdownTrigger>
              {href === undefined ? (
                <button>{txt}</button>
              ) : (
                <Link href={href}>
                  <button>{txt}</button>
                </Link>
              )}
            </DropdownTrigger>
            <DropdownMenu variant='solid' emptyContent="" color='primary' disableAnimation={true} className="dark-box">
              {links.map(({ txt: linkTxt, href: linkHref }, key) => (
                <DropdownItem key={key} href={linkHref} color='primary' >{linkTxt}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
        <Link href= "/"> <button type ="button"> Logout</button> </Link>
      </div>
    )
  }
}