import { Route } from "@/lib/types";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
    routes: Route[]
}

const DesktopNavbar = ({ routes }: Props) => {
    return (
        <NavigationMenu className="flex max-w-full justify-between text-base relative flex-none bg-(--bg-secondary) p-6 xl:p-6 md:p-4">
            <NavigationMenuItem className="lg:text-lg">
                Keystone TTRPG
            </NavigationMenuItem>
            <NavigationMenuList className="flex gap-5 xl:gap-8">
                {routes.map(({ txt, href, links }, key) => (
                    <NavigationMenuItem key={key}>
                        {links.length > 0 ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex cursor-pointer hover:text-white 2xl:text-lg">
                                        {txt}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-(--bg-secondary) border-transparent">
                                        {links.map((link, linkKey) => (
                                            <DropdownMenuItem className="text-base xl:text-lg" key={linkKey}>
                                                <Link href={link.href}>{link.txt}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <Link href={href!} className="2xl:text-lg">{txt}</Link>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default DesktopNavbar;