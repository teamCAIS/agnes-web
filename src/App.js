import './App.css';
import HomePage from './pages/HomePage';
import { HashRouter, Routes, Route  } from 'react-router-dom';
import SchoolDetails from './pages/SchoolDetails';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/escola/detalhes" element={<SchoolDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
