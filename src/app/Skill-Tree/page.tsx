import Button from "@/components/Button";
import MainNavBar from "@/components/MainNavBar";


export default function SkillTreePage() {
    return (
        <main> 
            {MainNavBar()}
            <h1><u>Skill tree selection page</u></h1>
            <div className="flex items-center justify-center">

                <Button text="Martial" href="Skill-Tree/Martial"/>
                <Button text="Mind" href="Skill-Tree/Mind"/>
                
            </div>
            
        </main>
    )
}