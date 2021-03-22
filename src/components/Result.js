import React,{useState} from "react" ; 
import {Link} from "react-router-dom" ;  

const Result = ({result})=>{
    
    return(
        <Link to={`/opis/${result.imdbID}`}>
        <div className="result" >
            <img src={result.Poster}></img>
            <h3>{result.Title}</h3>
        </div>
        </Link>
    ) ;


}
export default Result ; 