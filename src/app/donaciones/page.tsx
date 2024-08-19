"use client";

import React, { useState, useEffect } from 'react';

type Donacion = {
  id: number;
  titulo: string;
  descripcion: string;
  image_url?: string;
};

const Donaciones: React.FC = () => {
  const [donaciones, setDonaciones] = useState<Donacion | null>(null);

  useEffect(() => {
    // Simulación de la llamada a la API
    const fetchDonaciones = async () => {
      // Aquí deberías hacer una llamada a la API para obtener los datos
      const response = await fetch('/api/donaciones'); // Ajusta la URL según tu configuración
      const data: Donacion = await response.json();
      setDonaciones(data);
    };

    fetchDonaciones();
  }, []);

  return (
    <div className="py-8 px-4 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Donaciones</h1>
      {donaciones ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          {donaciones.image_url && (
            <img
              src={donaciones.image_url}
              alt="Imagen de la sección Donaciones"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{donaciones.titulo}</h2>
          <p className="text-gray-600">{donaciones.descripcion}</p>
        </div>
      ) : (
        <p className="text-center text-gray-100">De momento no hay información sobre donaciones disponible.</p>
      )}
    </div>
  );
};

export default Donaciones;
