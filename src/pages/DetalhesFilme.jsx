import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../contexts/FavoritosContext'; // Importar o contexto

export default function DetalhesFilme() {
  const { id } = useParams(); 
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // Consumindo o contexto de favoritos
  const { favoritos, adicionarFavorito, removerFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    fetch('/filmes.json')
      .then(resposta => resposta.json())
      .then(dados => {
        const filmeEncontrado = dados.find(f => f.id === parseInt(id));
        setFilme(filmeEncontrado);
        setCarregando(false);
      })
      .catch(erro => console.error("Erro ao buscar detalhes:", erro));
  }, [id]);

  if (carregando) return <p style={{ padding: '2rem' }}>Carregando detalhes...</p>;
  if (!filme) return <p style={{ padding: '2rem' }}>Filme não encontrado!</p>;

  // Verifica se este filme específico já está dentro da array de favoritos
  const ehFavorito = favoritos.some(fav => fav.id === filme.id);

  // Função que decide se vai adicionar ou remover ao clicar no botão
  const handleFavorito = () => {
    if (ehFavorito) {
      removerFavorito(filme.id);
    } else {
      adicionarFavorito(filme);
    }
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <img src={filme.poster} alt={`Poster de ${filme.titulo}`} style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }} />
      <div style={{ maxWidth: '600px' }}>
        <h1>{filme.titulo}</h1>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco.join(', ')}</p>
        
        {/* O botão agora tem onClick e muda de cor/texto se for favorito */}
        <button onClick={handleFavorito} style={{ 
          marginTop: '1.5rem', padding: '0.8rem 1.2rem', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold',
          backgroundColor: ehFavorito ? '#dc3545' : '#f5c518', // Vermelho para remover, amarelo para adicionar
          color: ehFavorito ? '#fff' : '#000'
        }}>
          {ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        </button>
      </div>
    </div>
  );
}