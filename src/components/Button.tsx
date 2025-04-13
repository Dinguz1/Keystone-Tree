import LinkButton from 'next/Link';

interface ButtonProps {
  text: string;
  href: string;
}

export default function HomeButton({ text, href }: ButtonProps) {
  return (
    <LinkButton 
      href={href} 
      className="p-10 border border-white rounded-md text-center inline-block">
      {text}
    </LinkButton>
  )
}

