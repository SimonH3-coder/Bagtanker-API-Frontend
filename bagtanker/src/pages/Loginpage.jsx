export function Loginpage() {
    const login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const body = await JSON.stringify({
            username: username, 
            password: password

        });

        

         const res = await fetch('http://localhost:4000/api/auth/login', { 
            method: 'POST', 
            body: body,
            
        })

        console.log("data", res)
       console.log("user og pass", username, password)
    };
    return (
        <>
        <h1>Login</h1>
        <p>Indtast dit brugernavn og password</p>
        <form onSubmit={(e) => login(e)} >
            <input 
            type="text" 
            name="username"
            placeholder="Indtast dit brugernavn"></input>
            <input 
            type="password" 
            name="password"
            placeholder="Indtast dit password"></input>
            <input type="submit" value="Login"></input>

        </form>
        
        
        </>
        
    )
}