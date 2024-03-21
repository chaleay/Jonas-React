import { useState } from "react";
import "./index.css";
const messages = ["Learn React", "Apply for Jobs", "Invest your new Income"];

function App() {
  const minStep = 1;
  const maxStep = 3;
  // a component rerenders when the state is updated
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > minStep)
      setStep((s) => {
        return s - 1;
      });
  }

  function handleNext() {
    if (step < maxStep)
      setStep((s) => {
        return s + 1;
      });
  }

  return (
    // react fragment == no root
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "X" : "Open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: `${step === minStep ? "#000" : "#7950f2"}`,
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: `${step === maxStep ? "#000" : "#7950f2"}`,
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
