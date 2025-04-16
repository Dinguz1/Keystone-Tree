import MindContent from "./components/MindContent";

export default function Page() {
    return (
        <main className="flex flex-col items-center content-center max-h-screen">
            <h1>
                <u>Mind Skill Tree</u>
            </h1>
            <MindContent />
        </main>
    );
}