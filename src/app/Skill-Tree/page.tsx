import Button from "@/components/Button";
import { Suspense } from "react";

export default function SkillTreePage() {
    return (
        <main> 
            <h1><u>Skill tree selection page</u></h1>
            <Suspense>
                <Button text="Martial" href="Skill-Tree/Martial"/>
                <Button text="Home" href="/"/>
            </Suspense>
        </main>
    )
}