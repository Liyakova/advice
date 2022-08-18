import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("Code every day!");

  const newAdvice = async () => {
    const link = "https://api.adviceslip.com/advice";
      const response = await fetch(link);
      const result = await response.json();
      setAdvice(result.slip.advice)
  }

  useEffect( () => {
    newAdvice();  
  }, [])



  return (
    <div className='container'>
      <p>{advice}</p>
      <button onClick={()=> newAdvice()}>get new advice</button>
    </div>
  );
}

export default App;
