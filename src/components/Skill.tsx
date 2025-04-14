
interface SkillProps { name: string, description: string, gridColumnIn: number, gridRowIn: number}

export default function Skill({ name, description, gridColumnIn, gridRowIn}: SkillProps ) {

    return (
        <div>
            <div className = "skill" style = {{ gridColumn: gridColumnIn, gridRow: gridRowIn }}> {name} 
                <div className = "tooltip"> {description} </div>
            </div>

        </div>
    );
}