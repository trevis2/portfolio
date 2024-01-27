import './App.scss';
import { Navbar } from './components';
import { Header, About, Skills, Testimonials, Work, Footer } from './features';
import { FcVlc } from "react-icons/fc";

function App() {

  function isSiteUnderContruction() {

    if (process.env.NODE_ENV === 'development') {
      return false;
    } else if (process.env.NODE_ENV === 'production') {
      return process.env.REACT_APP_WORK_IN_PROGRESS;
    }
    else {
      return true;
    }
  }
  const workInProgress = isSiteUnderContruction();
  console.log("wip", workInProgress)
  console.log(process.env.NODE_ENV)
  console.log(process.env.REACT_APP_WORK_IN_PROGRESS)

  return (
    <div className='app'>
      {
        !workInProgress &&
        <>
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Testimonials />
          <Work />
          <Footer />
        </>
      }
      {/* {
        workInProgress && <div>
          <div>
            <FcVlc size={30} />
            <FcVlc size={30} />
            <b style={{ fontSize: 25 }}>Work in progress!!</b>
            <FcVlc size={30} />
            <FcVlc size={30} />
          </div>
          <br />
          <br />
          <h1>Welcome in the Simone Trevisan's professional blog</h1>
          <h2>the site is under construction...</h2>
          <br />
          <br />
          <br />
          <h4>If you need to contact me, send me an email to trevis2@gmail.com</h4>
          <br />
          <h4>Bye!</h4>

        </div>
      } */}
    </div>
  )
}

export default App;
