import React, { useState, useEffect } from 'react';
import './App.scss';
import { Navbar } from './components';
import { Home, About, Skills, Portfolio, Experience, Footer } from './features';
import { WorkInProgressPage } from './pages';

function App() {
  const [isWorkInProgress, setIsWorkInProgress] = useState(true);

  const checkWorkInProgress = () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('process.env.REACT_APP_WORK_IN_PROGRESS', process.env.REACT_APP_WORK_IN_PROGRESS);

    if (process.env.NODE_ENV === 'development') {
      return false; // Always show in development
    } else if (process.env.NODE_ENV === 'production') {
      return process.env.REACT_APP_WORK_IN_PROGRESS === 'true';
    }
    return true;
  };

  useEffect(() => {
    setIsWorkInProgress(checkWorkInProgress());
  }, []);

  if (isWorkInProgress) {
    return <WorkInProgressPage />;
  }

  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;