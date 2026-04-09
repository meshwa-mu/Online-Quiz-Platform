function Result({score,timeTaken,setPage}){

return(

<div className="quiz-card">

<h2>Quiz Result</h2>

<h1 className="result-score">
{score}
</h1>

<p>Time Taken : {timeTaken} seconds</p>

<button onClick={()=>setPage("thankyou")}>
Finish
</button>

</div>

)

}

export default Result