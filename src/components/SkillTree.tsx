// 'use client' <-  why was this here? doesn't seem to be needed
import Skill from "@/components/Skill";
import React from "react";

interface SkillTreeProps {skills: React.ReactElement[]}


export default function SkillTree(skills: SkillTreeProps ) {

    return (
        <div 
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(12, 1fr)', 
            width: '1500PX',
            height: '1600PX',
            boxSizing: 'border-box',
            border: '5px solid black',
            backgroundColor: '#171717',
            marginBottom: '200px'}}>

                {skills.skills}
            
        </div>
    );
}