import SkillTree from "@/components/SkillTree";

export default function MartialPage() {

    return (
        <main style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",  }}> 

            <h1><u>Martial Skill Tree</u></h1>
            
            {/* <SkillTree name = "Skill 1" description = "Description 1"}/> */}
            <SkillTree/>
        </main>
    )
}
