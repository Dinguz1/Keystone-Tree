'use client'
import { useSearchParams } from 'next/navigation'


export default function Auth(){

    const searchParams = useSearchParams();
    const givenId = searchParams.get('Player-ID');
    const idList = ["Guest1597!$", "692338DM","1235"]
    
    return (typeof givenId === 'string' && idList.includes(givenId))

}