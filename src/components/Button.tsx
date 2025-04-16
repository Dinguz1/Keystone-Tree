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
    <Link href={href + "?Player-ID=" + searchParams.get('Player-ID')}>
      <button type ="button">
      {text}
      </button>
    </Link>
  )
}

