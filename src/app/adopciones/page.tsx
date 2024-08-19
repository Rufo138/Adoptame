import React from 'react';
import Image from 'next/image';

const perros = [
  {
    id: 1,
    nombre: 'Rex',
    edad: '2 años',
    tamaño: 'Grande',
    descripcion: 'Rex es un labrador enérgico y amigable que ama jugar.Rex es un labrador enérgico y amigable que ama jugar.Rex es un labrador enérgico y amigable que ama jugar.Rex es un labrador enérgico y amigable que ama jugar.',
    imagen: '/images/perro.jpg',
    zona: 'San Justo',
    contacto: '11302129239'
  },
  {
    id: 2,
    nombre: 'Luna',
    edad: '1 año',
    tamaño: 'Pequeño',
    descripcion: 'Luna es una perra leal y cariñosa, ideal para una familia activa.',
    imagen: '/images/perro.jpg',
    zona: 'San Justo',
    contacto: '11302129239'
  },
  {
    id: 3,
    nombre: 'Rex',
    edad: '2 años',
    tamaño: 'Mediano',
    descripcion: 'Rex es un labrador enérgico y amigable que ama jugar.',
    imagen: '/images/perro.jpg',
    zona: 'San Justo',
    contacto: '11302129239'
  },
  {
    id: 4,
    nombre: 'Luna',
    edad: '1 año',
    tamaño: 'Pastor Alemán',
    descripcion: 'Luna es una perra leal y cariñosa, ideal para una familia activa.',
    imagen: '/images/perro.jpg',
    zona: 'San Justo',
    contacto: '11302129239'
  },
  // Añade más perros según sea necesario
];

const Adopciones = () => {
  return (
    <div className="py-8 px-4 bg-gray-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Perros Disponibles para Adopción</h1>
      <p className="text-center mb-8">Encuentra a tu nuevo mejor amigo entre nuestros adorables perros en busca de un hogar amoroso.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {perros.map((perro) => (
          <div key={perro.id} className="bg-white rounded-lg shadow-md flex flex-col h-full">
            <Image
              src={perro.imagen}
              alt={perro.nombre}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">{perro.nombre}</h2>
                <p className="text-gray-700">Edad: {perro.edad}</p>
                <p className="text-gray-700">Tamaño: {perro.tamaño}</p>
                <p className="text-gray-600 mt-2">{perro.descripcion}</p>
                <p className="text-gray-600 mt-2">Zona: {perro.zona}</p>
                <p className="text-gray-600 mt-2">Contacto: {perro.contacto}</p>
              </div>
              <a
                href={`/adoptar/${perro.id}`}
                className="mt-auto text-center text-blue-600 hover:underline"
              >
                Más información
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopciones;
