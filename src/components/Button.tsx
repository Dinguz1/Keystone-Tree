'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

interface ButtonProps {
  text: string;
  href: string;
}

export default function HomeButton({ text, href }: ButtonProps) {
  const searchParams = useSearchParams();
  return (
    <Link 
      href={href + "?Password=" + searchParams.get('Password')}
      className="p-10 border border-white rounded-md text-center inline-block">
      {text}
    </Link>
  )
}

