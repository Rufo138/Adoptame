"use client";

import React, { useState, useEffect } from 'react';

type Nosotros = {
  id: number;
  titulo: string;
  contenido: string;
  image_url?: string;
};

const Nosotros: React.FC = () => {
  const [nosotros, setNosotros] = useState<Nosotros | null>(null);

  useEffect(() => {
    // Simulación de la llamada a la API
    const fetchNosotros = async () => {
      // Aquí deberías hacer una llamada a la API para obtener los datos
      const response = await fetch('/api/nosotros'); // Ajusta la URL según tu configuración
      const data: Nosotros = await response.json();
      setNosotros(data);
    };

    fetchNosotros();
  }, []);

  return (
    <div className="py-8 px-4 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Nosotros</h1>
      {nosotros ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          {nosotros.image_url && (
            <img
              src={nosotros.image_url}
              alt="Imagen de la sección Nosotros"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{nosotros.titulo}</h2>
          <p className="text-gray-600">{nosotros.contenido}</p>
        </div>
      ) : (
        <p className="text-center text-gray-100">De momento no hay información disponible.</p>
      )}
    </div>
  );
};

export default Nosotros;
