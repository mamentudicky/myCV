import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="body-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Clients />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
