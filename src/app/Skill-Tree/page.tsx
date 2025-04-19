import Button from "@/components/Button";

export default function SkillTreePage() {
    // this page needs more than a little formatting and designing 
    return (
        <div className = "body w-[1200px]">
            <h1 className="text-gradient">Skill tree selection page</h1>
            <div className="flex flex-col items-center min-h-screen">
                <h5>Example Trees, Tree is not made but page exists</h5>
                <Button text="Martial" href="Skill-Tree/Martial"/>
                <Button text="Mind" href="Skill-Tree/Mind"/>
                <h5>These pages to not exist yet, you can use them to see the dead end page</h5>
                <Button text="Body" href="/DeadEndPage"/>
                <Button text="Arcane" href="/DeadEndPage"/>
                <Button text="Divine" href="/DeadEndPage"/>
                <Button text="Nature" href="/DeadEndPage"/>
            </div>
        </div>
    )
}