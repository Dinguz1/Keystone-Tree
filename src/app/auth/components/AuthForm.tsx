'use client';

const AuthForm = () => {

    function onSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // makes the form's data parseable
        const formData = new FormData(event.currentTarget)
        // get the value for the playerId field
        const playerId = formData.get('playerId')
        
        fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ playerId })
        })
        .catch((err) => console.log('err', err))
      }     

    return (
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            name="playerId"
            placeholder="Player ID"
            className="mb-4"
            type="text"
          />
        </form>
    );
}

export default AuthForm;