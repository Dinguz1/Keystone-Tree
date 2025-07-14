"use client";
import useWindowDimensions from "@/lib/hooks/useWIndowDimension";
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
    const { width } = useWindowDimensions()

    let logoSize = 32

    if (width !== undefined && width >= 1024) {
        logoSize = 36
    } else if (width !== undefined && width >= 1536) {
        logoSize = 42
    }

    return (
        <footer className="p-6 pt-0 bg-(--bg-secondary) flex flex-col">
            <div className="footer-grid pb-14 border-b-(--bg-muted) border-b-1">
                <div className="footer-section -mb-8">
                    {/* <h4 className="text-lg md:text-base">Keystone TTRPG</h4> */}
                    <div className="flex py-8">
                        <Image src="/logo.svg" alt="Keyston TTRPG Logo" height={logoSize + 4} width={logoSize + 4} className=""/>
                    </div>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Project Keystone</h4>
                    <ul>
                        <li className="footer-link">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/rules">Rules</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/character">Character Creation</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/resources">Resources</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Socials</h4>
                    <ul className="flex gap-y-6 gap-6">
                        <li className="socials-item">
                            <Link href="#" className="flex">
                                <Image src="/instagram.svg" alt="Instagram Logo" height={logoSize} width={logoSize} />
                            </Link>
                        </li>
                        <li className="socials-item">
                            <Link href="#" className="flex">
                                <Image src="/youtube.svg" alt="Youtube Logo" height={logoSize} width={logoSize} />
                            </Link>
                        </li>
                        <li className="socials-item">
                            <Link href="#" className="flex">
                                <Image src="/discord.svg" alt="Discord Logo" height={logoSize} width={logoSize} />
                            </Link>
                        </li>
                        <li className="socials-item col-start-2">
                            <Link href="#" className="flex">
                                <Image src="/reddit.svg" alt="Reddit Logo" height={logoSize} width={logoSize} />
                            </Link>
                        </li>
                        <li className="socials-item col-start-4">
                            <Link href="#" className="flex">
                                <Image src="/twitter.svg" alt="Twitter Logo" height={logoSize} width={logoSize} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Contact Information</h4>
                    <ul className="flex flex-col gap-1">
                        <li className="text-base">
                            keystonettrpg@guild.com
                        </li>
                        <li className="text-base"> 
                            (555)-555-4567
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-sm text-center !font-thin py-4">&copy; 2025 Project Keystone. All rights reserved.</p>
        </footer>
    );
}

export default Footer;