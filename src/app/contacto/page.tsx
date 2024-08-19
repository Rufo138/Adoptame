"use client";

import React, { useState } from 'react';

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Simulación de envío del formulario
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setNombre('');
      setEmail('');
      setMensaje('');
      setEnviado(true);
      setError(null);
    } catch (error) {
      setError('No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      setEnviado(false);
    }
  };

  return (
    <div className="py-8 px-4 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Contacto</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {enviado ? (
          <p className="text-center text-green-500">Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700">Mensaje</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacto;
