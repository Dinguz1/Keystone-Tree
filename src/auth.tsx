
'use client'
import { useSearchParams } from 'next/navigation'


export default function auth(){

    const searchParams = useSearchParams();
    const password = searchParams.get('Password');

    var isAuth = ('Test' === password);
    if (!isAuth){
        return true
    }else{
        return false
    }
}