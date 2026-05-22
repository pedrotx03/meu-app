import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../contexts/FavoritosContext';

export default function Favoritos() {
  // Puxa a lista de favoritos e a função de remover do nosso armazém
  const { favoritos, removerFavorito } = useContext(FavoritosContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Meus Favoritos</h1>

      {/* Renderização condicional: se a lista estiver vazia, avisa o usuário */}
      {favoritos.length === 0 ? (
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      ) : (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {favoritos.map(filme => (
            <div key={filme.id} style={{ border: '1px solid #555', padding: '1rem', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
              <img src={filme.poster} alt={filme.titulo} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} />
              <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{filme.titulo}</h3>
              
              <Link to={`/filme/${filme.id}`} style={{ display: 'inline-block', marginBottom: '10px', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
                Ver Detalhes
              </Link>
              
              {/* Botão de atalho para remover direto da página de favoritos */}
              <button onClick={() => removerFavorito(filme.id)} style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', width: '100%' }}>
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}