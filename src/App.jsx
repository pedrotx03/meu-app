import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritosProvider } from './contexts/FavoritosContext'; // 1. Importou o contexto

import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import DetalhesFilme from './pages/DetalhesFilme';
import RotaProtegida from './routes/RotaProtegida';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        {/* 2. Envelopou tudo que precisa saber dos favoritos */}
        <FavoritosProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/filme/:id" element={<DetalhesFilme />} />
              
              <Route element={<RotaProtegida />}>
                <Route path="/favoritos" element={<Favoritos />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}