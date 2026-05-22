import { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  // Estado inicia lendo o localStorage (igual fizemos no AuthContext)
  // Se não tiver nada salvo, começa como uma lista vazia []
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem('favoritos');
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  // Efeito para salvar no localStorage toda vez que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Função para adicionar um filme
  const adicionarFavorito = (filme) => {
    // Verifica se o filme já está na lista para não adicionar duplicado
    if (!favoritos.some((fav) => fav.id === filme.id)) {
      setFavoritos([...favoritos, filme]); // Mantém os antigos e adiciona o novo no final
    }
  };

  // Função para remover um filme usando o ID
  const removerFavorito = (id) => {
    // Filtra a lista, mantendo apenas os filmes que têm o ID DIFERENTE do que queremos remover
    setFavoritos(favoritos.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
