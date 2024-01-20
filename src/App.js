import './App.css';
import { Navbar } from './components';
import { Header, About, Skills, Testimonials, Work, Footer } from './features';


function App() {
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
