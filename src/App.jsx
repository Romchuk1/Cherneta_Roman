import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from './context/AppContext';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movies from './pages/Movies';
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <AppContext.Provider value={{ movies, setMovies }}>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/add" element={<AddMovie />} />

        <Route path="/movies/:id" element={<MovieDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </AppContext.Provider>
  );
}

export default App;