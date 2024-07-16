import React, { useState, useEffect } from 'react';
import './App.scss';
import { Navbar } from './components';
import { Home, About, Skills, Ratings, Portfolio, Footer } from './features';
import { WorkInProgressPage } from './pages';
import Companies from './features/Companies/Companies';

function App() {
  const [isWorkInProgress, setIsWorkInProgress] = useState(true);

  const checkWorkInProgress = () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('process.env.REACT_APP_WORK_IN_PROGRESS', process.env.REACT_APP_WORK_IN_PROGRESS);

    if (process.env.NODE_ENV === 'development') {
      //return process.env.REACT_APP_WORK_IN_PROGRESS === 'true';
      return false;
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
      <Ratings />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;