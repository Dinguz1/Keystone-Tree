import AuthForm from './components/AuthForm';

export default function AuthPage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb 4">
        <h1 className="mb-4" >Enter Player ID</h1>
        <AuthForm />
      </div>
    );
}