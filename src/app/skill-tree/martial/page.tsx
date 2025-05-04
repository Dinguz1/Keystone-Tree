import MindContent from "./components/MartialContent";

export default function Page() {
    return (
        
        <main className="flex flex-col items-center content-center max-h-screen">
            <h1>
                <u>Martial Skill Tree</u>
            </h1>
            <MindContent />
        </main>
    );
}