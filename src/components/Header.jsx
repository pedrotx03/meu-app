import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext'; // Importa o contexto de Auth

export default function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);
  const { usuario, logout } = useContext(AuthContext); // Puxa os dados de login

  return (
    <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/favoritos" style={{ color: 'white' }}>Favoritos</Link>
        {/* Some com o link de Login se o usuário já estiver logado */}
        {!usuario && <Link to="/login" style={{ color: 'white' }}>Login</Link>}
      </nav>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* Mostra o nome do usuário e o botão Sair apenas se estiver logado */}
        {usuario && (
          <span>Olá, {usuario.nome} | <button onClick={logout} style={{ cursor: 'pointer', marginLeft: '0.5rem' }}>Sair</button></span>
        )}
        <button onClick={alternarTema} style={{ padding: '0.5rem', cursor: 'pointer' }}>
          Mudar para tema {tema === 'claro' ? 'Escuro' : 'Claro'}
        </button>
      </div>
    </header>
  );
}