import './App.css';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Votes from './pages/frontoffice/Votes';
import Login from './pages/backoffice/Login';
import Dashboard from './pages/backoffice/Dashboard';
import Homepage from './pages/frontoffice/Homepage';

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

  return (
    <div className={`App ${containerClass}`}>
      <Routes>
        {/* Backoffice */}
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* Frontoffice */}
        <Route path='/' element={<Homepage />} />
        <Route path='/votes' element={<Votes />} />
      </Routes>
    </div>
  );
}

export default App;
