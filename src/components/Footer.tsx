"use client";
import useWindowDimensions from "@/lib/hooks/useWIndowDimension";
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
    const { width } = useWindowDimensions()

    let logoHeight = 32
    let logoWidth = 32

    if (width !== undefined && width >= 1024) {
        logoHeight = 36
        logoWidth = 36
    } else if (width !== undefined && width >= 1536) {
        logoHeight = 42
        logoWidth = 42
    }

    return (
        <footer className="grid grid-cols-1 grid-rows-3 p-6 bg-(--bg-secondary)">
            <div className="footer-section md:gap-2 md:text-center">
                <h4 className="hidden text-lg md:text-base">Socials</h4>
                <ul className="flex justify-center md:grid grid-cols-6 md:w-60 gap-y-6 gap-6">
                    <li className="socials-item">
                        <Link href="#" className="flex">
                            <Image src="/instagram.svg" alt="Instagram Logo" height={logoHeight} width={logoWidth} />
                        </Link>
                    </li>
                    <li className="socials-item">
                        <Link href="#" className="flex">
                            <Image src="/youtube.svg" alt="Youtube Logo" height={logoHeight} width={logoWidth} />
                        </Link>
                    </li>
                    <li className="socials-item">
                        <Link href="#" className="flex">
                            <Image src="/discord.svg" alt="Discord Logo" height={logoHeight} width={logoWidth} />
                        </Link>
                    </li>
                    <li className="socials-item col-start-2">
                        <Link href="#" className="flex">
                            <Image src="/reddit.svg" alt="Reddit Logo" height={logoHeight} width={logoWidth} />
                        </Link>
                    </li>
                    <li className="socials-item col-start-4">
                        <Link href="#" className="flex">
                            <Image src="/twitter.svg" alt="Twitter Logo" height={logoHeight} width={logoWidth} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="divider" />
            <div className="footer-section md:gap-2 md:text-center">
                <h4 className="hidden text-lg md:text-base">Contact Me</h4>
                {/* <p className="text-base">Contact Info for the Developer Goes Here</p> */}
                <ul className="px-2 flex justify-between">
                    <li className="text-base">
                        <span className="hidden">Email:</span> keystonettrpg@guild.com
                    </li>
                    <li className="text-base">
                        <span className="hidden">Phone Number:</span> 
                        (555)-555-4567
                    </li>
                </ul>
            </div>
            <div className="divider" />
            <div className="footer-section flex-row-reverse justify-between md:text-center">
                {/* <h4 className="text-lg md:text-base">Keystone TTRPG</h4> */}
                <div className="w-50">
                    <Image src="/logo.svg" alt="Keyston TTRPG Logo" fill={true} className=""/>
                </div>
                <p className="text-base text-center !font-thin w-30">&copy; 2025 Project Keystone. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;