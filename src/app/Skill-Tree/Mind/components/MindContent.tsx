'use client'
import SkillNode from '@/components/SkillNode';
import { ReactFlow, Node, Edge } from '@xyflow/react'

import '@xyflow/react/dist/style.css';

const nodeTypes = {
    skillNode: SkillNode
}

const MindContent = () => {
    const skills: Node[] = [
        { 
            id: '1', 
            position: { x: 0, y: 0 }, 
            data: { label: 'Skill 1' }, 
            type: 'skillNode',
        },
        { 
            id: '2', 
            position: { x: 0, y: 125 }, 
            data: { label: 'Skill 2' }, 
            type: 'skillNode' 
        },
        { 
            id: '3', 
            position: { x: 75, y: 275 }, 
            data: { label: 'Skill 3' }, 
            type: 'skillNode' 
        },
        { 
            id: '4', 
            position: { x: -75, y: 275 }, 
            data: { label: 'Skill 4' }, 
            type: 'skillNode' 
        },
    ]

    const initialEdges: Edge[] = [
        { 
            id: 'e1-2', 
            source: '1', 
            target: '2', 
            type: 'straight' 
        },
        { 
            id: 'e2-3', 
            source: '2', 
            target: '3', 
            type: 'straight',
        },
        { 
            id: 'e2-4', 
            source: '2', 
            target: '4', 
            type: 'straight',
        }        
    ]
    
    return (
        <div className='h-screen w-screen max-h-screen flex items-center justify-center'>
            <ReactFlow 
                nodes={skills} 
                edges={initialEdges} 
                nodeTypes={nodeTypes}
                fitView={true}
            />
        </div>
    );
}

export default MindContent