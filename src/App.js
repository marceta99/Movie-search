
import Opis from "./components/Opis";
import Search from "./components/Search";
import "./index.css" ;  
import {Route,BrowserRouter as Router} from "react-router-dom"  ; 



function App() {


  return (
    <Router>
    <div className="App">
    
      <header className="app-header">
        <h1>FILMOVI</h1>
      </header>
     
      <div className="container">
          <Route path="/" exact component={Search}></Route>
      </div>

      <div className="opis-filma">
        <Route path="/opis/:id"  component={Opis}></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
