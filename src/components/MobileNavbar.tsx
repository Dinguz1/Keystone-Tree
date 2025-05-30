import { Route } from "@/lib/types";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenu, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

type Props = {
    routes: Route[]
}

const MobileNavbar = ({ routes }: Props) => {
    return (
        <NavigationMenu className="flex justify-between mb-12 text-lg max-w-full p-8" orientation="vertical">
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
                    <SheetContent className="bg-(--bg-primary) border-(--bg-primary) flex max-w-full">
                        <NavigationMenuList className="text-lg flex flex-col gap-3 py-6">
                            {routes.map(({ txt, href, links }, key) => (
                                <NavigationMenuItem key={key} className="w-full pl-4">
                                    {links.length > 0 ? (
                                        <div className="pl-0">
                                            <NavigationMenuTrigger className="flex items-center gap-0 cursor-pointer text-lg">
                                                {txt}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="max-w-full">
                                                <ul className="flex flex-col gap-1 pl-2">
                                                    {links.map((link, linkKey) => (
                                                        <li key={linkKey} className="flex max-w-full">
                                                            <Link href={link.href} className="w-full">
                                                                {link.txt}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>    
                                        </div>
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