import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // 1. useState: armazenando a lista de filmes e o status de carregamento
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // 2. useEffect: executando a busca assim que o componente é montado na tela
  useEffect(() => {
    // 3. fetch: buscando os dados do nosso arquivo na pasta public
    fetch('/filmes.json')
      .then(resposta => resposta.json())
      .then(dados => {
        setFilmes(dados); // Guarda os filmes no estado
        setCarregando(false); // Avisa que terminou de carregar
      })
      .catch(erro => console.error("Erro ao buscar filmes:", erro));
  }, []); // A array vazia [] garante que isso só rode UMA vez ao abrir a Home

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Filmes</h1>

      {/* 4. Renderização Condicional: Mostra o texto ou a lista dependendo do estado */}
      {carregando ? (
        <p>Carregando filmes...</p>
      ) : (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          
          {/* Percorrendo o array de filmes para gerar os "cards" */}
          {filmes.map(filme => (
            <div key={filme.id} style={{ border: '1px solid #555', padding: '1rem', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
              <img 
                src={filme.poster} 
                alt={`Poster do filme ${filme.titulo}`} 
                style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{filme.titulo}</h3>
              
              {/* 5. Link com parâmetro: Passando o ID do filme na URL */}
              <Link 
                to={`/filme/${filme.id}`} 
                style={{ display: 'inline-block', marginTop: '10px', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
              >
                Ver Detalhes
              </Link>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}