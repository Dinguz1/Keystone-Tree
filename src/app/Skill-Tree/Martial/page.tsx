import SkillTree from "@/components/SkillTree";
import Skill from "@/components/Skill";

export default function MartialPage() {
    
    const skills = [

        {name: "Skill 1", description: "Description 1", gridColumnIn: 1, gridRowIn: 1},
        {name: "Skill 2", description: "Description 2", gridColumnIn: 2, gridRowIn: 1},
        
    ];

    return (
        <main style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",  }}> 

            <h1><u>Martial Skill Tree</u></h1>
            
            <SkillTree skills/>

        </main>
    )
}
