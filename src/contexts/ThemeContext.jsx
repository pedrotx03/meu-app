import { createContext, useState, useEffect } from 'react';

// 1. Criando o contexto (nosso "armazém" de dados)
export const ThemeContext = createContext();

// 2. Criando o Provider (o componente que vai distribuir os dados)
export function ThemeProvider({ children }) {
  // Estado para guardar qual é o tema atual
  const [tema, setTema] = useState('claro');

  // Função que inverte o tema
  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  // Efeito colateral: toda vez que "tema" mudar, aplica as cores no <body> do HTML
  useEffect(() => {
    if (tema === 'escuro') {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [tema]); // O array [tema] diz ao React para observar esta variável

  return (
    // Tudo que estiver dentro do Provider terá acesso a "value"
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}