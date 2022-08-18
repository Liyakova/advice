import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("Code every day!");
  const [getNew, setGetNew] = useState({advice});

  useEffect( () => {
    const getAdvice = async () => {
      const link = "http://www.boredapi.com/api/activity/";
      const response = await fetch(link);
      const result = await response.json();
      setAdvice(result.activity)
    }
    getAdvice();  
  }, [getNew])

  const newAdvice = () => {
    setGetNew({advice});
  }

  return (
    <div className='container'>
      <p>{advice}.</p>
      <button onClick={()=> newAdvice()}>get new advice</button>
    </div>
  );
}

export default App;
