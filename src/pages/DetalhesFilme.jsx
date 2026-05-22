import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetalhesFilme() {
  // 1. useParams pega o ID que está na URL do navegador (ex: se for /filme/2, o id é '2')
  const { id } = useParams(); 
  
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // 2. useEffect com dependência [id] executa toda vez que o ID da URL mudar
  useEffect(() => {
    fetch('/filmes.json')
      .then(resposta => resposta.json())
      .then(dados => {
        // Procuramos na lista o filme que tem o mesmo ID da URL. 
        // Usamos parseInt(id) porque o ID da URL sempre vem como texto (string).
        const filmeEncontrado = dados.find(f => f.id === parseInt(id));
        setFilme(filmeEncontrado);
        setCarregando(false);
      })
      .catch(erro => console.error("Erro ao buscar detalhes:", erro));
  }, [id]);

  if (carregando) return <p style={{ padding: '2rem' }}>Carregando detalhes...</p>;
  if (!filme) return <p style={{ padding: '2rem' }}>Filme não encontrado!</p>;

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <img 
        src={filme.poster} 
        alt={`Poster de ${filme.titulo}`} 
        style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }} 
      />
      <div style={{ maxWidth: '600px' }}>
        <h1>{filme.titulo}</h1>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Elenco:</strong> {filme.elenco.join(', ')}</p>
        
        {/* Botão sem funcionalidade por enquanto, como pede a atividade */}
        <button style={{ 
          marginTop: '1.5rem', 
          padding: '0.8rem 1.2rem', 
          cursor: 'pointer', 
          backgroundColor: '#f5c518', 
          border: 'none', 
          borderRadius: '4px', 
          fontWeight: 'bold',
          color: '#000'
        }}>
          Adicionar aos favoritos
        </button>
      </div>
    </div>
  );
}