import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../contexts/FavoritosContext';

export default function DetalhesFilme() {
  const { id } = useParams(); 
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [mensagem, setMensagem] = useState(""); // 1. Estado para o feedback visual

  const { favoritos, adicionarFavorito, removerFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    fetch('/filmes.json')
      .then(resposta => {
        if (!resposta.ok) throw new Error("Erro na rede");
        return resposta.json();
      })
      .then(dados => {
        const filmeEncontrado = dados.find(f => f.id === parseInt(id));
        if (!filmeEncontrado) throw new Error("Filme não encontrado no banco de dados.");
        setFilme(filmeEncontrado);
        setCarregando(false);
      })
      .catch(err => {
        setErro(err.message);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <p style={{ padding: '2rem' }}>Carregando detalhes...</p>;
  if (erro) return <p style={{ padding: '2rem', color: '#dc3545', fontWeight: 'bold' }}>Erro: {erro}</p>;
  if (!filme) return <p style={{ padding: '2rem' }}>Filme não encontrado!</p>;

  const ehFavorito = favoritos.some(fav => fav.id === filme.id);

  // 2. Função modificada para exibir mensagem temporária
  const handleFavorito = () => {
    if (ehFavorito) {
      removerFavorito(filme.id);
      mostrarMensagem("Removido dos favoritos!");
    } else {
      adicionarFavorito(filme);
      mostrarMensagem("Filme adicionado com sucesso!");
    }
  };

  const mostrarMensagem = (texto) => {
    setMensagem(texto);
    setTimeout(() => setMensagem(""), 3000); // A mensagem some após 3 segundos
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <img src={filme.poster} alt={`Poster de ${filme.titulo}`} style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }} />
      <div style={{ maxWidth: '600px' }}>
        <h1>{filme.titulo}</h1>
        <p style={{ marginTop: '1rem' }}><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p style={{ marginTop: '0.5rem' }}><strong>Diretor:</strong> {filme.diretor}</p>
        <p style={{ marginTop: '0.5rem' }}><strong>Elenco:</strong> {filme.elenco.join(', ')}</p>
        
        <button onClick={handleFavorito} style={{ 
          marginTop: '1.5rem', padding: '0.8rem 1.2rem', cursor: 'pointer', border: 'none', borderRadius: '4px', fontWeight: 'bold',
          backgroundColor: ehFavorito ? '#dc3545' : '#f5c518',
          color: ehFavorito ? '#fff' : '#000',
          transition: 'background-color 0.2s'
        }}>
          {ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        </button>

        {/* 3. Exibição do feedback visual */}
        {mensagem && (
          <div style={{ marginTop: '1rem', padding: '0.8rem', backgroundColor: '#28a745', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
}