import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/favoritos" style={{ color: 'white' }}>Favoritos</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
      </nav>
      
      {/* Aqui está o botão! */}
      <button onClick={alternarTema} style={{ padding: '0.5rem', cursor: 'pointer' }}>
        Mudar para tema {tema === 'claro' ? 'Escuro' : 'Claro'}
      </button>
    </header>
  );
}