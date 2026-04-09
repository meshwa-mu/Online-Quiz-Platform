function Question({ data, selected, onSelect }) {
  return (
    <div className="question-card">
      <h2>{data.question}</h2>

      <div className="options">
        {data.options.map((opt, i) => (
          <label key={i} className="option-card">
            <input
              type="radio"
              checked={selected === opt}
              onChange={() => onSelect(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question