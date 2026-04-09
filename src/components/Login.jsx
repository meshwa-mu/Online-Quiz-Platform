import { useState } from "react"

function Login({ setPage, setUsername }) {
  const [username, setUser] = useState("")
  const [password, setPass] = useState("")
  const [error, setError] = useState("")

  async function handleLogin() {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if (res.status !== 200) {
      setError(data.msg)
      return
    }

    localStorage.setItem("token", data.token)

    setUsername(username)
    setPage("quiz")
  }

  return (
    <div className="login-card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter .edu email"
        value={username}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="6 digit password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />

      <p className="error">{error}</p>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login