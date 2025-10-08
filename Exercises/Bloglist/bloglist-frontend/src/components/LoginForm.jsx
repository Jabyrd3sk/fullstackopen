import { useState } from 'react'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    handleLogin({ username, password })
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button id="login-button" type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm