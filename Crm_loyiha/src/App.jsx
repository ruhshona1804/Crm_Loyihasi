import Nav from "./navbar/navbar";
import './App.css'
import {Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
     <Nav/>
    <Routes>
    <Route path="/haridor"/>
    </Routes>
    </>
  )
}

export default App
