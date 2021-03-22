import React from "react"  ; 
import Result from "./Result";


const Results = ({results})=>{

  if(results !=null){
return(
<div className="results">

  {results.map(result =>(
      <Result result={result} ></Result>
  ))}    


</div>

); 
  }else {
    return (
      <h1 >WRONG MOVIE PLS GO BACK AND ENTER AGAIN !!!!!</h1>
    ) ; 
  }




}

export default Results ; 