'use client'
import { useSearchParams } from 'next/navigation'


export default function Auth(){

    const searchParams = useSearchParams();
    const givenId = searchParams.get('PlayerID');
    const idList = ["Guest1597!$", "692338DM"]
    
    return (typeof givenId === 'string' && idList.includes(givenId))

}