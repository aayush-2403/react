import React from "react";
import ReactDOM  from "react-dom/client";

const Heading= () =>  <h1 id="title">Namste React</h1>


const HeaderComponent = () =>{
   return (
   <div>
      <Heading/>
      <h1>Namste react fuctional component</h1>
      <h2>this is a h2 tag</h2>
   </div> 
      );
   
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);