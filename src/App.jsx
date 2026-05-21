import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import RotaProtegida from './routes/RotaProtegida'; // 1. Importando a Rota Protegida

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* 2. Criamos uma rota sem caminho (path) que serve de barreira */}
            <Route element={<RotaProtegida />}>
              {/* Todas as rotas colocadas aqui dentro estarão protegidas! */}
              <Route path="/favoritos" element={<Favoritos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}