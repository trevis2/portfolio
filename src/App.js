import './App.css';
import { Navbar } from './components';
import { Header, About, Skills, Testimonials, Work, Footer } from './features';
import { FcVlc } from "react-icons/fc";


function App() {
  const wip = process.env.REACT_APP_WORK_IN_PROGRESS;
  console.log(process.env.NODE_ENV);
  return (
    <div className='app'>
      {
        !wip &&
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
      {
        wip && <div>
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
      }
    </div>
  )
}

export default App;
