import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceID] = useState("");
  const fetchNew = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceID(data.slip.id);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceID(data.slip.id);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <div className="App">
        <h1>ADVICE #{adviceId}</h1>
        <p>"{advice}"</p>
        <img src="/pattern-divider-desktop.svg" alt="divider" />
      </div>
      <button onClick={fetchNew}>
        <img src="/icon-dice.svg" alt="dice" />
      </button>
      <h2 className="floating">Click the button for more advice.</h2>
    </main>
  );
}

export default App;
