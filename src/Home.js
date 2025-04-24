import React, { useState } from "react";

const musicas = [
  {
    titulo: "Tu És Fiel, Senhor",
    video: "https://www.youtube.com/embed/qR4CHeLRt1I",
    cifra: `C       G         Am     Em
Tu és fiel, Senhor, meu Pai celeste
F        C        D7         G
Pleno poder aos teus filhos darás
C          G       Am       Em
Nunca mudaste, tu nunca faltaste
F         C          G       C
Tal como eras, tu sempre serás`,
  },
  {
    titulo: "Castelo Forte",
    video: "https://www.youtube.com/embed/nIixrYKs91A",
    cifra: `G         D         Em      C
Castelo forte é o nosso Deus
G        D        Em
Espada e bom escudo
G       D           Em        C
Com seu poder defende os seus
G       D        G
Em todo transe agudo`,
  },
  {
    titulo: "Sonda-me, Usa-me",
    video: "https://www.youtube.com/embed/lWyTzjmP4sA",
    cifra: `G       D       Em       C
Sonda-me, ó Deus, e conhece o meu coração
G       D       Em       C
Prova-me e conhece os meus pensamentos`,
  },
  {
    titulo: "Ao Único",
    video: "https://www.youtube.com/embed/wAi5ZtJY2Rg",
    cifra: `D           A         Bm           G
Ao único que é digno de receber
D           A             Bm          G
A honra e a glória, a força e o poder`,
  },
  {
    titulo: "Porque Ele Vive",
    video: "https://www.youtube.com/embed/kbOFWm5y3Yc",
    cifra: `G          C       G
Deus enviou seu Filho amado
Em        Am        D
Pra me salvar e perdoar`,
  }
];

function Home() {
  const [busca, setBusca] = useState("");
  const [aberta, setAberta] = useState(null);

  const filtradas = musicas.filter(m =>
    m.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">🎶 Músicas Adventistas</h2>
      <input
        type="text"
        placeholder="Buscar música..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border rounded shadow focus:outline-none"
      />
      <div className="space-y-6">
        {filtradas.map((musica, i) => (
          <div key={i} className="bg-white p-4 shadow rounded">
            <h3
              className="text-lg font-semibold text-blue-700 cursor-pointer hover:underline"
              onClick={() => setAberta(aberta === i ? null : i)}
            >
              {musica.titulo}
            </h3>
            {aberta === i && (
              <>
                <iframe
                  className="w-full h-64 my-4 rounded"
                  src={musica.video}
                  title={musica.titulo}
                  allowFullScreen
                ></iframe>
                <pre className="bg-blue-50 p-4 text-gray-800 whitespace-pre-wrap rounded">{musica.cifra}</pre>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
