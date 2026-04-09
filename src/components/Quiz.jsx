import { useState, useEffect } from "react"
import Question from "./Question"
import reactQuestions from "../data/reactQuestions"

function Quiz({ setPage, username, setScore, setTime }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if (timeLeft === 0) handleSubmit()

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  function handleAnswer(option) {
    const updated = [...answers]
    updated[current] = option
    setAnswers(updated)
  }

  function nextQuestion() {
    if (current < reactQuestions.length - 1) {
      setCurrent(current + 1)
    } else {
      handleSubmit()
    }
  }

  async function handleSubmit() {
    let score = 0

    reactQuestions.forEach((q, i) => {
      if (answers[i] === q.answer) score++
    })

    setScore(score)
    setTime(60 - timeLeft)

    await fetch("http://localhost:5000/api/result/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({
        score,
        time: 60 - timeLeft
      })
    })

    setPage("result")
  }

  return (
    <div className="quiz-card">

      <div className="timer">Time: {timeLeft} sec</div>

      <Question
        data={reactQuestions[current]}
        selected={answers[current]}
        onSelect={handleAnswer}
      />

      <button onClick={nextQuestion}>
        {current === reactQuestions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  )
}

export default Quiz