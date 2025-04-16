import Button from "@/components/Button";
import MainNavBar from "@/components/MainNavBar";


export default function SkillTreePage() {
    return (
        <main> 
            {MainNavBar()}

            <h1 className="text-gradient">Skill tree selection page</h1>
            <div className="flex flex-col items-center min-h-screen">

                <Button text="Martial" href="Skill-Tree/Martial"/>
                <Button text="Mind" href="Skill-Tree/Mind"/>
                
            </div>
            
        </main>
    )
}