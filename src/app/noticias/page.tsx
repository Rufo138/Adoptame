"use client";

import React, { useState, useEffect } from 'react';

type Noticia = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
};

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    // Simulación de la llamada a la API
    const fetchNoticias = async () => {
      const fetchedNoticias: Noticia[] = []; // Aquí se llenaría con datos reales
      setNoticias(fetchedNoticias);
    };

    fetchNoticias();
  }, []);

  return (
    <div className="py-8 px-4 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Noticias</h1>
      {noticias.length === 0 ? (
        <p className="text-center text-gray-100">De momento no hay noticias subidas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {noticia.imagen && (
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{noticia.titulo}</h2>
                <p className="text-gray-600 mt-2">{noticia.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Noticias;
