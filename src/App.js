import React, { useState } from "react";

export default function App() {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Advento Cifras - Testando Build</h1>
      <button
        onClick={() => setAberta(!aberta)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Mostrar Cifra
      </button>
      {aberta && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold text-blue-700">Tu És Fiel, Senhor</h2>
          <pre className="text-gray-800 whitespace-pre-wrap">
C       G         Am     Em
Tu és fiel, Senhor, meu Pai celeste
F        C        D7         G
Pleno poder aos teus filhos darás
          </pre>
        </div>
      )}
    </div>
  );
}
