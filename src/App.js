import './App.css';
import { useEffect } from 'react';
import { getSchools } from './api/schools';

function App() {

  useEffect(() => {
      const getData = async () => {
      const result = await getSchools()
      console.log(result.data);
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Agnes search
        </h1>
      </header>
    </div>
  );
}

export default App;
