import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'

import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <section className='page flex-column justify-between'>


        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/faq' element={<FAQ />} />
          <Route render={() => <h1>Wrong page!</h1>} />
        </Routes>
        <Footer />

      </section>
    </Router>
  );
}

export default App;
