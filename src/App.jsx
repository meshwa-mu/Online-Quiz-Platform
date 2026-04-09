import { useState } from "react"
import Login from "./components/Login"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import ThankYou from "./components/ThankYou"
import "./App.css"

function App() {
  const [page, setPage] = useState("login")
  const [username, setUsername] = useState("")
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0)

  return (
    <div className="app">

      {page === "login" && (
        <Login setPage={setPage} setUsername={setUsername} />
      )}

      {page === "quiz" && (
        <Quiz
          setPage={setPage}
          username={username}
          setScore={setScore}
          setTime={setTime}
        />
      )}

      {page === "result" && (
        <Result score={score} time={time} setPage={setPage} />
      )}

      {page === "thankyou" && (
        <ThankYou setPage={setPage} />
      )}

    </div>
  )
}

export default App