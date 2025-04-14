// 'use client' <-  why was this here? doesn't seem to be needed

    interface SkillProps {
        name: string;
        description: string;
    }

    // export default function SkillTree({ name, description }: { name: SkillProps; description: SkillProps }) {
    export default function SkillTree() {

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
            marginBottom: '200px'}}
        >{
            <>  
                {/* this is not elegant, maybe make skill into a component? */}
                <div className="skill" id="skr" style={{ gridColumn: 1, gridRow: 1 }}>

                    {/* {name.name} */}
                        Skill 
                    <div className = 'tooltip'> 
                        {/* {description.description} */}
                        Description
                    </div>
                </div>
            </>

        }</div>
    );
}