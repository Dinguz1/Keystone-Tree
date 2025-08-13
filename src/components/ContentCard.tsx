"use client";

import useWindowDimensions from "@/lib/hooks/useWIndowDimension";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

type Props = {
    image: string,
    title: string, 
    content: string
}

const ContentCard = ({ image, title, content }: Props) => {
    const { width } = useWindowDimensions()

    let quality: number = 40
    if (width !== undefined && width >= 1024) {
        quality = 60
    } else if (width !== undefined && width >= 1536) {
        quality = 80
    }

    return (
        <Card className="border-none flex flex col relative bg-(--bg-secondary) p-0 gap-2 shadow-xl">
            <CardHeader className="flex flex-col p-0">
                <Image 
                    src={image} 
                    alt='' 
                    fill={true} 
                    objectFit="cover" 
                    quality={quality} 
                    className="rounded-t-(--radius-xl)" 
                />
                <CardTitle className="text-md text-center w-full xl:min-h-[60px] px-2 2xl:min-h-fit">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-base text-center p-4 max-h-[50%] h-full">
                {content}
            </CardContent>
        </Card>
    );
}

export default ContentCard;