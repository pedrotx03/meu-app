import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
  const [nomeInput, setNomeInput] = useState('');
  const { login } = useContext(AuthContext); // Puxa a função de login do Contexto
  const navigate = useNavigate(); // Hook para redirecionar de página

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    if (nomeInput.trim() !== '') {
      login(nomeInput); // Efetua o login
      navigate('/'); // Redireciona o usuário para a Home
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>Entrar</button>
      </form>
    </div>
  );
}