import './App.css';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Votes from './pages/frontoffice/Votes';
import Login from './pages/backoffice/Login';
import Dashboard from './pages/backoffice/Dashboard';
import Homepage from './pages/frontoffice/Homepage';
import HomepageNoVotes from './components/HomepageNoVotes/HomepageNoVotesComponent';
import ThankYou from './components/ThankYou/ThankYou';
import { useEffect, useState } from 'react';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const isBackOffice = location.pathname.startsWith('/login') ||
                       location.pathname.startsWith('/dashboard');

  const containerClass = isBackOffice ? 'backoffice' : 'frontoffice';

  const hasAlreadyVoted = localStorage.getItem('voto');

  const [votingClosed, setVotingClosed] = useState(false);

  const isPast5PM = () => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();

    return currentHour > 17 || (currentHour === 17 && currentMinutes >= 0);
  };

  useEffect(() => {
    
    setVotingClosed(isPast5PM());

    const timer = setInterval(() => {
      const isTimeToClose = isPast5PM();
      if(isTimeToClose) {
        setVotingClosed(true);
        clearInterval(timer);
      }
    }, 60000);

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`App ${containerClass}`}>
      <Routes>
        {/* Backoffice */}
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
        {/* Frontoffice */}

        {/* Routes da attivare durante le domeniche di sfilata */}
        <Route path='/' element={hasAlreadyVoted || votingClosed ? <ThankYou /> : <Homepage />} />
        <Route path='/votes' element={hasAlreadyVoted || votingClosed ? <ThankYou /> : <Votes />} />

        {/* Homepage Placeholder */}
        {/* <Route path='/' element={<HomepageNoVotes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
