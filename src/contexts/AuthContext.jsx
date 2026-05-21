import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // O estado começa tentando ler o localStorage. Se não achar nada, é null.
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuario');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Efeito colateral: toda vez que a variável "usuario" mudar (login ou logout),
  // nós atualizamos o localStorage para salvar ou apagar a informação.
  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('usuario');
    }
  }, [usuario]);

  // Função para fazer login
  const login = (nome) => {
    setUsuario({ nome }); // Guarda um objeto com a propriedade nome
  };

  // Função para fazer logout
  const logout = () => {
    setUsuario(null); // Zera o estado
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}