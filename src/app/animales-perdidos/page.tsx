"use client";

import React, { useState, useEffect } from 'react';

type AnimalPerdido = {
  id: number;
  nombre_animal: string;
  descripcion: string;
  fecha_perdida: string; // Puedes usar Date si prefieres manejar fechas
  imagen: string;
  estado: string;
  zona: string;
  contacto: string;
};

const AnimalesPerdidos: React.FC = () => {
  const [animalesPerdidos, setAnimalesPerdidos] = useState<AnimalPerdido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAnimalesPerdidos = async () => {
      try {
        // Simulación de la llamada a la API
        const response = await fetch('/api/animales-perdidos'); // Cambia esta URL a la de tu API real
        if (!response.ok) {
          throw new Error('Error al fetch de animales perdidos');
        }
        const data: AnimalPerdido[] = await response.json();
        setAnimalesPerdidos(data);
      } catch {
        // Manejo genérico del error sin mostrar detalles
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalesPerdidos();
  }, []);

  if (loading) return <p className="text-center text-gray-100">Cargando...</p>;

  return (
    <div className="py-8 px-4 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Animales Perdidos</h1>
      {animalesPerdidos.length === 0 ? (
        <p className="text-center text-gray-100">De momento no se han cargado animales perdidos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animalesPerdidos.map((animal) => (
            <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={animal.imagen}
                alt={animal.nombre_animal}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{animal.nombre_animal}</h2>
                <p className="text-gray-700">Descripción: {animal.descripcion}</p>
                <p className="text-gray-700">Fecha de pérdida: {new Date(animal.fecha_perdida).toLocaleDateString()}</p>
                <p className="text-gray-700">Estado: {animal.estado}</p>
                <p className="text-gray-600 mt-2">Zona: {animal.zona}</p>
                <p className="text-gray-600 mt-2">Contacto: {animal.contacto}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimalesPerdidos;
