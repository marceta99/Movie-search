import React  from "react"  ;   
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Results from "./Results";


const Search = () =>{

const [search,setSearch] = useState("") ;    
const [submitedSearch,setSubmited] = useState("avengers") ; 
const [filmovi,setFilmovi] = useState([]) ; 
 

const apiKey = `13482fa1` ;
const api = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${submitedSearch} ` ;  

    const updateSearch = (e)=>{
     setSearch(e.target.value) ; 
     console.log(search)  ; 
    }
    const submitSearch =(e)=>{
     e.preventDefault() ;
     setSubmited(search) ;   
     console.log("submitovana je "+submitedSearch) ; 
    }
    useEffect( ()=>{
        dohvatiFilmove() ; 
        console.log("use efect se pokrenuo") ;  
 
     },[submitedSearch])  ; 
    const dohvatiFilmove = async()=>{

    const response = await fetch(api) ;  
    const data = await response.json() ; 
    
    setFilmovi(data.Search) ;
    console.log(filmovi) ;
    //console.log(data.Search) ; 
       
  
    }
    
   

return(

<div className="big-container"  >
    <form className="search-container" onSubmit={submitSearch} >

        <input className="search-box"  type="text" placeholder="search FILM" onChange={updateSearch}></input>
        <button type="submit"><FaSearch></FaSearch></button>
   

    </form>
    <div>
    <Results results={filmovi}></Results>
    </div>

    
</div>
);  



}
export default Search ; 