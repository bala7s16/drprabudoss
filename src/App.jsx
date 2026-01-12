import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TreatmentsPage from './pages/TreatmentsPage';
import KnowYourDoctor from './pages/KnowYourDoctor';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light text-dark font-sans">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/know-your-doctor" element={<KnowYourDoctor />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
