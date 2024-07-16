import React, { useState, useEffect } from 'react';
import './App.scss';
import { Navbar } from './components';
import { Header, About, Skills, Testimonials, Work, Footer } from './features';
import { WorkInProgressPage } from './pages';

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
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  );
}

export default App;