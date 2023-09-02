import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainContent from "./MainContent.jsx";




function App() {
 return ( 
    <div className = "components" >
  <Header />
  <MainContent />
  <Footer />


  </div>


)
}



ReactDOM.render( <App /> ,
 document.getElementById('root')
);