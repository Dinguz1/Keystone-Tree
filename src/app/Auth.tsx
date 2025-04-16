'use client'
import { useSearchParams } from 'next/navigation'


export default function Auth(){

    const searchParams = useSearchParams();
    const givenId = searchParams.get('Player-ID');
    const idList = ["Guest1597!$", "692338DM","1235"]
    // const isAuth = (typeof givenId === 'string' && idList.includes(givenId))
    if (givenId === "1235"){
        return 1
    } else if (givenId === "1235GM"){
        return 2
    }else{
        return -1
    }


}