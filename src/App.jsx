import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando os componentes e páginas que criamos
import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';

export default function App() {
  return (
    // BrowserRouter envolve toda a área que terá navegação
    <BrowserRouter>
      {/* O Header fica fora do Routes para aparecer em TODAS as páginas */}
      <Header />
      
      {/* Routes é onde definimos quais componentes aparecem em qual URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}