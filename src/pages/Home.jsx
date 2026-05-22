import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null); // 1. Novo estado para erros

  useEffect(() => {
    fetch('/filmes.json')
      .then(resposta => {
        if (!resposta.ok) throw new Error("Erro ao carregar dados.");
        return resposta.json();
      })
      .then(dados => {
        setFilmes(dados);
        setCarregando(false);
      })
      .catch(err => {
        console.error(err);
        setErro("Não foi possível carregar os filmes. Verifique sua conexão."); // 2. Captura o erro
        setCarregando(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Filmes</h1>

      {/* 3. Renderização do erro ou da lista */}
      {erro && <p style={{ color: '#dc3545', fontWeight: 'bold', marginTop: '1rem' }}>{erro}</p>}
      
      {carregando && !erro ? (
        <p>Carregando filmes...</p>
      ) : (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {filmes.map(filme => (
            <div key={filme.id} style={{ border: '1px solid #555', padding: '1rem', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
              <img src={filme.poster} alt={filme.titulo} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} />
              <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{filme.titulo}</h3>
              <Link to={`/filme/${filme.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', borderRadius: '4px' }}>
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}