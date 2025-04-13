'use client'

type Props = {

}

export default function TreeWrapper({ }: Props) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)', // Example grid with 12 columns
                gridTemplateRows: 'repeat(12, 1fr)', // Example grid with 12 rows
                width: '100vw',
                height: '100vh',
                boxSizing: 'border-box',
            }}
        >
            {/* Elements can be placed here */}
        </div>
    );
}