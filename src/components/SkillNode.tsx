import { Handle, NodeProps, Position } from "@xyflow/react";

export default function SkillNode ({ data }: NodeProps) {
    return (
        <>
            <Handle 
                type="target"  
                position={Position.Top} 
                style={{ opacity: 0, visibility: 'hidden' }} 
            />
            <div className="skill">
                {data.label as string} 
                <div className="tooltip">{data.toolTip as string}</div>
            </div>
            <Handle 
                type="source"  
                position={Position.Bottom} 
                style={{ opacity: 0, visibility: 'hidden' }}
            />
        </>
    )
}