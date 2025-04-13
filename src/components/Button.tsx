import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function HomeButton({ text, href }: ButtonProps) {
  return (
    <Link 
      href={href} 
      className="p-10 border border-white rounded-md text-center inline-block">
      {text}
    </Link>
  )
}

