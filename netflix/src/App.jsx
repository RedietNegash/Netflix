import "./App.css";
import React from 'react'
import Rows from "./Row/Rows";
import RowData from "./Row/RowData";
import request from "./Request/request";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
        <Banner/>
         <RowData/>
       
      
    </div>
  )
}

export default App










