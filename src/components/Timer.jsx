import { useState,useEffect } from "react"

function Timer({setPage}){

const [time,setTime]=useState(60)

useEffect(()=>{

if(time===0){
setPage("result")
}

const timer=setInterval(()=>{
setTime(time-1)
},1000)

return()=>clearInterval(timer)

},[time])

return(

<h3>Time Left : {time}s</h3>

)

}

export default Timer