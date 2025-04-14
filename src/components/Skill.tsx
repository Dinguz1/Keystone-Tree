
interface SkillProps { name: string, description: string, gridColumnIn: number, gridRowIn: number }

export default function Skill({ name, description, gridColumnIn, gridRowIn }: SkillProps ) {

    // I dont know if I need to do this? will that just be stored in the component by default by just including it in the props?
    const gridColumn = gridColumnIn
    const gridRow = gridRowIn 

    return (
        <div>
            <div className="skill" id="skr" style={{ gridColumn: gridColumn, gridRow: gridRow }}>

            </div>
        </div>
    );
}