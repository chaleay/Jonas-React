import "./styles.css";
import { useState } from "react";

export default function App() {
  var date = new Date();

  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div className="App">
      <Counter
        name={"Step"}
        number={step}
        stateHookIncrease={incrementStep}
        stateHookDecrease={decrementStep}
      />
      <Counter
        name={"Count"}
        number={count}
        stateHookIncrease={incrementCount}
        stateHookDecrease={decrementCount}
      />
      <div>
        <p>
          {!count
            ? "Today is " + date.toDateString()
            : `${count} days from today is
          ${new Date(date.setDate(date.getDate() + count)).toDateString()}`}
        </p>
      </div>
    </div>
  );

  function Counter({ name, number, stateHookIncrease, stateHookDecrease }) {
    return (
      <div>
        <button onClick={stateHookDecrease}>-</button>
        <h2 style={{ display: "inline" }}>
          {name}:{number}
        </h2>
        <button onClick={stateHookIncrease}>+</button>
      </div>
    );
  }
}
