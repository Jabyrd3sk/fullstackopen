// Part 5b: props.children and prototypes
const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                    username
                    <input 
                        value={username} 
                        onChange={handleUsernameChange} 
                        autoComplete="username" 
                    />
                    </label>
                </div>
                <div>
                    <label>
                    password
                    <input 
                        type='password' 
                        value={password} 
                        onChange={handlePasswordChange} 
                        autoComplete="current-password" 
                    />
                    </label>
                </div>
                <button id='login-button' type="submit">
                    login
                </button>
            </form>
        </div>
    )
}

export default LoginForm