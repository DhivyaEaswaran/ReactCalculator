import "./App.css";
import React, {useState} from 'react'
function App() {
const [value,setValue]=useState("");

const calcButtons=["AC","DEL",".","/","7","8","9","*","4","5","6","+","1","2","3","-","00","0","=","%"];
 function handleButtons(keys){
  if(keys==="AC"){
    setValue("");
 }
 else if(keys==="DEL"){
  setValue(value.slice(0,-1));
 }
 else if(keys==="="){
  setValue(eval(value));
 }
 else{
  setValue(value+keys)
 }

}
  return (
      <div className="container">
        <div className="calculator">
          <input type="text" value={value}></input>
          {calcButtons.map((buttons,index)=>(
           <button value={buttons} key={index} onClick={()=>handleButtons(buttons)}>{buttons}</button>
          
          ))}
            
          </div>
        </div>
    
  );
}

export default App;
