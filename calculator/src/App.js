import "./App.css";
import React, {useState} from 'react'
function App() {
const [value,setValue]=useState("");
  return (
      <div className="container">
        <div className="calculator">
          <input type="text" value={value}></input>
            <button value="AC" onClick={e=>setValue("")}>AC</button>
            <button value="DEL" onClick={e=>setValue(value.slice(0,-1))}>DEL</button>
            <button value="." onClick={e=>setValue(value+e.target.value)}>.</button>
            <button value="/" onClick={e=>setValue(value+e.target.value)}>/</button>
            <button value="7" onClick={e=>setValue(value+e.target.value)}>7</button>
            <button value="8" onClick={e=>setValue(value+e.target.value)}>8</button>
            <button value="9" onClick={e=>setValue(value+e.target.value)}>9</button>
            <button value="*" onClick={e=>setValue(value+e.target.value)}>*</button>
            <button value="4" onClick={e=>setValue(value+e.target.value)}>4</button>
            <button value="5" onClick={e=>setValue(value+e.target.value)}>5</button>
            <button value="6" onClick={e=>setValue(value+e.target.value)}>6</button>
            <button value="+" onClick={e=>setValue(value+e.target.value)}>+</button>
            <button value="1" onClick={e=>setValue(value+e.target.value)}>1</button>
            <button value="2" onClick={e=>setValue(value+e.target.value)}>2</button>
            <button value="3" onClick={e=>setValue(value+e.target.value)}>3</button>
            <button value="-" onClick={e=>setValue(value+e.target.value)}>-</button>
            <button value="00" onClick={e=>setValue(value+e.target.value)}>00</button>
            <button value="0" onClick={e=>setValue(value+e.target.value)}>0</button>
            <button value="=" class="equal" onClick={e=>setValue(eval(value))}>=</button>
            <button value="%" onClick={e=>setValue(value+e.target.value)}>%</button>
          </div>
        </div>
    
  );
}

export default App;
