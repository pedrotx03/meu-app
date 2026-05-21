import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {/* O componente Link substitui a tag <a> para evitar o recarregamento da página */}
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/favoritos" style={{ color: 'white' }}>Favoritos</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
      </nav>
    </header>
  );
}