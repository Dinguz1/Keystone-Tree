import { Route } from "@/lib/types";
import { NavigationMenuList, NavigationMenu, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { NavigationMenuContent, NavigationMenuItem } from "./ui/navigation-menu";

type Props = {
    routes: Route[]
}

const MobileNavbar = ({ routes }: Props) => {
    return (
        <NavigationMenu className="flex justify-between mb-12 text-lg">
            <NavigationMenuItem className="flex items-center">
                Keystone TTRPG
            </NavigationMenuItem>
            <NavigationMenuList>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="gap-2 text-lg flex items-center py-0">
                            Menu 
                            <Menu color="#f3ede2" strokeWidth={3} className="!w-[24px] !h-[24px]" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-(--bg-primary) border-(--bg-primary)">
                        <NavigationMenuList className="text-lg flex flex-col gap-3 py-6">
                            {routes.map(({ txt, href, links }, key) => (
                                <NavigationMenuItem key={key}>
                                    {links.length > 0 ? (
                                        <>
                                            <NavigationMenuTrigger className="flex items-center gap-1 cursor-pointer">
                                                {txt}
                                                <ChevronDown strokeWidth={3}/>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="flex flex-col gap-1">
                                                    {links.map((link, linkKey) => (
                                                        <li key={linkKey}>
                                                            <Link href={link.href}>
                                                                {link.txt}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>    
                                        </>
                                    ) : (
                                        <Link href={href!}>{txt}</Link>
                                    )}
                                    
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </SheetContent>
                </Sheet>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default MobileNavbar;