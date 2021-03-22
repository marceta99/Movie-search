import React,{useEffect,useState} from "react" ;  
import {Link} from "react-router-dom" ; 

const Opis= ({match})=>{
    
    const idFilma = match.params.id ; //ovo dobijam pomocu ovog match-a,imam ovo na dev ed router klipu na kraju 29 min objasnjeno
    //i mogu da vidim da na ruti kod opisa u APP.js ima posle opis/:id stoji dve tacke pa id i taj id ce da uzme vrednost koja
    //nama treba.
    
    
    const apiPut = `http://www.omdbapi.com/?apikey=13482fa1&i=+${idFilma}` ;

    const [podaci,setPodaci] = useState("") ;  
    
   

   
    useEffect(()=>{
        fetch(apiPut)
        .then(responseee =>{
            return responseee.json() ; 
        })
        .then(dataaa =>{
            console.log(dataaa) ; 
            setPodaci(dataaa) ; 
        })
    
        

        console.log(match) ; 
    },[]) ; 
    
return(
    <div className="opis">
        <h1>{podaci.Title}</h1>
        <h3>IMDB Rating :{podaci.imdbRating}</h3>
        <p>BoxOffice:{podaci.BoxOffice}</p>
        <div className="slika-opis">
            <img src={podaci.Poster}></img>
            <p>{podaci.Plot}</p>
           
        </div>    
        <Link to="/">  
        <button className="dugme" >Back</button>
        </Link> 
    </div>
) ; 

}
export default Opis ; 