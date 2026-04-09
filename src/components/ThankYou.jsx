function ThankYou({ setPage }) {
  function handleExit() {
    setPage("login")
  }

  return (
    <div className="thankyou-card">
      <h1>Thank You For Attempting The Quiz 🎉</h1>
      <p>Powered By</p>
      <h2>Meshwa Dadukiya</h2>

      <button onClick={handleExit}>Exit</button>
    </div>
  )
}

export default ThankYou