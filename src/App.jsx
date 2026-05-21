import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'; // Importando o provedor

import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';

export default function App() {
  return (
    // O ThemeProvider abraça todo o aplicativo para distribuir o tema
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}