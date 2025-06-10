import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function previous(){
    if(step > 1)
     setStep(step-1);
  }

  function next(){
    if(step < 3)
   setStep(step+1)
  }

  return (
  <>
  <button className="close" onClick={()=> setisOpen(!isOpen)  }>&times;</button>
  { isOpen && (
  <div className="steps">
<div className="numbers">
<div className={step >=1 ? 'active':""}>1</div>
<div className={step >=2 ? 'active':""}>2</div>
<div className={step >=3 ? 'active':""}>3</div>
</div>

<p className="message">Steps {step}: {messages[step -1]}</p>

<div className="buttons">
  <button onClick={previous}>Previous</button>
  
  <button onClick={next}>Next</button>
</div>
  </div>
  )}
  
  </>
  )
}

export default App;
