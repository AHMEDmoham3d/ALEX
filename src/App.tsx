import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Magazine from './components/Magazine';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import MagazineDetails from './components/MagazineDetails';
import BoardOfDirectors from './components/BoardOfDirectors';

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionsRef.current[section]) {
      sectionsRef.current[section]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white" dir="rtl">
              <Header onNavigate={handleNavigate} />
              <Hero />
              <div ref={(el) => (sectionsRef.current['news'] = el)}>
                <News />
              </div>
              <div ref={(el) => (sectionsRef.current['magazine'] = el)}>
                <Magazine />
              </div>
              <div ref={(el) => (sectionsRef.current['board'] = el)}>
                <BoardOfDirectors />
              </div>
              <div ref={(el) => (sectionsRef.current['achievements'] = el)}>
                <Achievements />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/magazine/:id" element={<MagazineDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
