import './App.css';
import { HashRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import UserContext from './contexts/UserContext';
import { useEffect, useState } from 'react';
import EvaluationPage from './pages/Evaluation/EvaluationPage';
import { Snackbar } from './components/Feedbacks';
import ErrorContext from './contexts/ErrorContext';

function App() {

  const [userInfo, setUserInfo]= useState({});
  const [error, setError]= useState("");
  
  useEffect(() => {
    if(userInfo._id) return;
    const user = localStorage.getItem("agnesUser");
    if(user) {
      setUserInfo(JSON.parse(user));
    }
  }, [userInfo]);

  useEffect(() => {
    if(!error) return;
    setTimeout(() => setError(""), 4000);
  }, [error])

  return (
    <HashRouter>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
      <ErrorContext.Provider value={{error, setError}}>
        <Routes>
          <Route path="/avaliar" element={<EvaluationPage />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/escola/detalhes" element={<SchoolDetails />} /> */}
        </Routes>
        {error ? (
          <Snackbar>{error}</Snackbar>
        ) : null}
      </ErrorContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
