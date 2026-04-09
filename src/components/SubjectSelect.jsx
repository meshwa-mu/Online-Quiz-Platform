function SubjectSelect({setPage,setSubject}){

const handleSelect=(sub)=>{
setSubject(sub)
setPage("quiz")
}

return(

<div className="card">

<h2>Select Subject</h2>

<button onClick={()=>handleSelect("javascript")}>
JavaScript Quiz
</button>

<button onClick={()=>handleSelect("react")}>
React Quiz
</button>

</div>

)

}

export default SubjectSelect