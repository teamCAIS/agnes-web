import './App.css';
import { HashRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import UserContext from './contexts/UserContext';
import { useEffect, useState } from 'react';

function App() {

  const [userInfo, setUserInfo]= useState({});
  
  useEffect(() => {
    if(userInfo._id) return;
    const user = localStorage.getItem("agnesUser");
    if(user) {
      setUserInfo(JSON.parse(user));
    }
  }, [userInfo]);

  return (
    <HashRouter>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <Routes>
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/escola/detalhes" element={<SchoolDetails />} /> */}
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
