'use client'
import ContentCard from "@/components/ContentCard"
import useWindowDimensions from "@/lib/hooks/useWIndowDimension"
import { HomeCard } from "@/lib/types"
import Image from "next/image"

export default function Home() {
  const { width } = useWindowDimensions()

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

  let quality: number = 40
  if (width !== undefined && width >= 1024) {
    quality = 60
  } else if (width !== undefined && width >= 1536) {
    quality = 80
  }
  

  return (
      <div className="relative flex flex-col gap-12">
        <div className="relative md:-mx-8 md:-my-12">
          <Image
            src="/home-hero.png" 
            fill={true} 
            objectFit="cover"
            alt="" 
            className="block absolute w-inherit h-inherit 2xl:max-h-[65vh]"
            hidden={width! < 768}
          />
          <div className="flex flex-col gap-2 h-full md:absolute top-0 left-0 md:p-8 lg:justify-center xl:w-3/4">
            <h3 className="text-2xl">Forge Your Story</h3>
            <p className="md:w-3/4">
              Step into a world shaped by your choices, not your class. Keystone is a tabletop RPG built for deep storytelling, tactical decision-making, and rich character growth.
            </p> 
            <p>
              Whether you&apos;re a seasoned GM or a new player, your journey starts here.
            </p>
            <button className="bg-(--bg-accent) text-base px-3 py-2 w-fit cursor-pointer my-4">Start Building</button>
          </div>
        </div>
        <div className="flex flex-col bg-(--bg-tertiary) text-(--bg-primary) -mx-8 p-8 gap-8 shadow-xl md:align-center md:px-18 lg:flex-row lg:px-8 2xl:py-12">
          <section className="md:text-left md:w-[85%]">
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
          <div className="divider" />
          <section className="md:text-left md:w-[85%] lg:text-center">
            <h4 className="text-xl w-70 md:w-full">Get Started With the Play-Test</h4>
            <p>Download the free rule book and character sheets</p>
            <ul className="text-base p-4 flex flex-col gap-2 md:text-left lg:px-4 xl:text-center 2xl:pt-8">
              <li className="styled-list">Create a party using our flexible, classless system.</li>
              <li className="styled-list">Try out EP/WP and AP-based combat in your next session</li>
              <li className="styled-list">Share your feedback and help shape the final release</li>
              <li className="styled-list">Explore modular world-building tools to craft your own setting</li>
              <li className="styled-list">Join our community and be part of the game&apos;s evolution</li>
            </ul>
          </section>
        </div>
        <div className="flex flex-col gap-6 md:grid grid-cols-2 xl:grid-cols-4 my-6">
          <h4 className="font-semibold text-xl text-(--bg-compliment) col-span-full xl:text-center">Core Game Concepts</h4>
          {homeCards.map(({ image, title, content }, key) => (
            <ContentCard 
              image={image} 
              title={title} 
              content={content} 
              key={key} 
            />
          ))}
        </div>
      </div>
    );
}

