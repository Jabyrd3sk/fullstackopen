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
                    username
                    <input value={username} onChange={handleUsernameChange} autoComplete="username" />
                </div>
                <div>
                    password
                    <input type='password' value={password} onChange={handlePasswordChange} autoComplete="current-password" />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginForm