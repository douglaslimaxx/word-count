import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")

  const [wCount, setWCount] = useState(0)

  const [classNameInput, setClassNameInput] = useState({
    input: "wordInput", 
    errorMessage: "hideMessageError",
    resultMessage: "hideMessageResult"
  })

  return (
    <div className="App">
      <header className="Word Count">
        Word Count
      </header>
       <div>
        <input 
        className={classNameInput.input}
        type="text" 
        placeholder='Put the text here'
        value={value} 
        onChange={e => {
          setClassNameInput({
            input: "wordInput", 
            errorMessage: "hideMessageError",
            resultMessage: "hideMessageResult"})
          setValue(e.target.value)}}/>
       </div>
      <button onClick={() => {
          const number = value.split(" ").filter((i) => i !== "").length
          if(number === 0){
            setClassNameInput({
              input: "wordInputError", 
              errorMessage: "showMessageError", 
              resultMessage: "hideMessageResult"})
            setWCount(number)
          } else {
            setClassNameInput({
              input: "wordInput", 
              errorMessage: "hideMessageError", 
              resultMessage: "showMessageResult"})
            setWCount(number)
          }
          }
        }>Submit</button>
      <div
      className={classNameInput.resultMessage}>
        This text contains {wCount} words
      </div>
      <div
      className={classNameInput.errorMessage}>
        No text detected - Text is required
      </div>
    </div>
  );
}

export default App;
