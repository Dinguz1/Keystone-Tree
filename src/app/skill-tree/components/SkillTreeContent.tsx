"use client";
import { Edge, Handle, NodeProps, Position, ReactFlow } from "@xyflow/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function TreeNode ({ data }: NodeProps) {
    const searchParams = useSearchParams()
    const id = searchParams.get('Player-ID')
    const tree = (data.text as string).toLowerCase()
    const route = `/skill-tree/${tree}?Player-ID=${id}`
    
    return (
        <>
            <Handle 
                type="target"  
                position={Position.Top} 
                style={{ opacity: 0, visibility: 'hidden' }}
                id="top-target"
            />
            <Handle 
                type="source"  
                position={Position.Top} 
                style={{ opacity: 0, visibility: 'hidden' }}
                id="top-source"
            />
            <Link href={route} className="skill">{data.text as string}</Link>
            <Handle 
                type="target"  
                position={Position.Bottom} 
                style={{ opacity: 0, visibility: 'hidden' }}
                id="bottom-target"
            />
            <Handle 
                type="source"  
                position={Position.Bottom} 
                style={{ opacity: 0, visibility: 'hidden' }}
                id="bottom-source"
            />
        </>
    )
}

const nodeTypes = {
    treeNode: TreeNode
}

const SkillTreeContent = () => {
    const trees = [
        { 
            id: '1', 
            position: { x: 0, y: -260 }, 
            data: { text: 'Martial' },
            type: 'treeNode' 
        },
        { 
            id: '2', 
            position: { x: -130, y: -150 }, 
            data: { text: 'Mind' },
            type: 'treeNode' 
        },
        { 
            id: '3', 
            position: { x: -75, y: 0 }, 
            data: { text: 'Divine' },
            type: 'treeNode' 
        },
        { 
            id: '4', 
            position: { x: 75, y: 0 }, 
            data: { text: 'Nature' }, 
            type: 'treeNode'
        },
        { 
            id: '5', 
            position: { x: 130, y: -150 }, 
            data: { text: 'Body' },
            type: 'treeNode' 
        },
    ]

    const edges: Edge[] = []

    return (
        <div className="flex items-center justify-center h-screen max-w-screen max-h-screen">
            <ReactFlow 
                nodes={trees}
                nodeTypes={nodeTypes}
                edges={edges}
                fitView={true}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
            />
        </div>
    );
}

export default SkillTreeContent;