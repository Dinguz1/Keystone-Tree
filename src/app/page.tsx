'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useWindowDimensions from "@/lib/hooks/useWIndowDimension"
import { HomeCard } from "@/lib/types"
import Image, { getImageProps } from "next/image"

// https://nextjs.org/docs/pages/api-reference/components/image#background-css
const getBackgroundImage = (srcSet = '') => {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
    return `image-set(${imageSet})`
}

export default function Home() {
  const { props: { srcSet } } = getImageProps({ alt: '', width: 128, height: 128, src: '/home-hero.png' })
  
  const { width } = useWindowDimensions()
  const backgroundImage = getBackgroundImage(srcSet)
  // Disable the hero image at viewports smaller than the tailwindcss 'md' breakpoint
  const style = { width: '100%', backgroundImage: width! > 768 ? backgroundImage : 'none' }

  const homeCards: HomeCard[] = [
    {
      image: '/img1.png',
      title: 'Player-Focused Narrative Tools',
      content: 'Keystone is built to empower storytelling and player-driven outcomes- with tools for scenes, goals, and pacing.'
    },
    {
      image: '/img2.png',
      title: 'Classless Growth & Skill Trees',
      content: 'Characters evolved through open-ended skill trees in six domains (Martial, Body, Mind, Divine, Nature, and Arcane).'
    }, 
    {
      image: '/img3.png',
      title: 'Tactical Combat',
      content: 'Players engage in flexible, positioning-focused combat using Action Points rather than rigid turns.'
    },
    {
      image: '/img4.png',
      title: 'Exhaustion & Wounds',
      content: 'A dual resource system tracking mental and physical strain to shape survival and tension.'
    }
  ]

  return (
      <div className="relative flex flex-col gap-12">
        <div style={style} className="bg-no-repeat bg-contain flex flex-col gap-3">
          <h3 className="text-2xl">Forge Your Story</h3>
          <p>Step into a world shaped by your choices, not your class. Keystone is a tabletop RPG built for deep storytelling, tactical decision-making, and rich character growth.</p> 
          <p>Whether you&apos;re a seasoned GM or a new player, your journey starts here.</p>
          <button className="bg-(--bg-accent) text-base px-3 py-2 w-fit cursor-pointer">Start Building</button>
        </div>
        <div className="flex flex-col bg-(--bg-tertiary) text-(--bg-primary) -mx-8 p-8 gap-8 shadow-xl">
          <section className="">
            <h4 className="text-xl">Goal of the System</h4>
            <p>
              Keystone is built to empower players and game masters to tell character-driven stories within a flexible, tactical framework.
            </p>
            <br /> 
            <p>
              It replaces rigid classes with open-ended skill trees, allowing characters to grow organically through choices and experiences. Its action-point-based combat encourages creative tactics and teamwork, making every encounter feel intentional and dynamic.
            </p>
            <br />
            <p>
              Beyond mechanics, Keystone fosters a collaborative table environment where pacing, tone, and story are shaped by everyone at the table.
            </p>
            <br/>
            <p>
              Whether you're unraveling ancient mysteries, navigating political intrigue, or forging personal arcs, the system adapts to your group's unique style and goals.
            </p>
          </section>
          <section>
            <h4 className="text-xl text-left w-70">Get Started With the Play-Test</h4>
            <p>Download the free rule book and character sheets</p>
            <ul className="text-base p-4 flex flex-col gap-2">
              <li className="styled-list">Create a party using our flexible, classless system.</li>
              <li className="styled-list">Try out EP/WP and AP-based combat in your next session</li>
              <li className="styled-list">Share your feedback and help shape the final release</li>
              <li className="styled-list">Explore modular world-building tools to craft your own setting</li>
              <li className="styled-list">Join our community and be part of the game&apos;s evolution</li>
            </ul>
          </section>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xl text-(--bg-accent)">Core Game Concepts</h4>
          {homeCards.map(({ image, title, content }, key) => (
            <Card key={key} className="flex flex-col relative p-0 rounded-none border-none bg-(--bg-secondary) pb-6 shadow-xl">
              <CardHeader className="flex flex-col h-50 p-0 items-center">
                <Image src={image} alt='' fill={true} objectFit="cover" quality={40} />
                <CardTitle className="text-lg my-2">{title}</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <p className="text-center">{content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
}

