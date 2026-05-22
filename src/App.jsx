import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import DetalhesFilme from './pages/DetalhesFilme'; // 1. Importou a nova página
import RotaProtegida from './routes/RotaProtegida';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* 2. Rota dinâmica usando o :id */}
            <Route path="/filme/:id" element={<DetalhesFilme />} />
            
            <Route element={<RotaProtegida />}>
              <Route path="/favoritos" element={<Favoritos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}