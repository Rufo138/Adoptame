import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-black text-white h-screen">
      <div className="max-w-full mx-auto relative py-10 px-6 h-full">
        {/* Imagen de fondo */}
        <img 
          src="images/banner.jpg" 
          alt="Extractor de BHO" 
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        
        {/* Capa de fondo negro con opacidad */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              Bienvenidos
              <span className="text-green-500"> a </span>
              <span className="text-gold">Adoptame</span>
            </h1>
            <p className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl mb-8">
          Adoptame es la plataforma dedicada a encontrar hogares amorosos para animales necesitados. Conéctate con tu nueva mascota y únete a nuestra misión de rescate y adopción responsable.</p>
            <a href="/adoptar" className="bg-green-600 hover:bg-gold text-white py-2 px-4 rounded-md text-lg font-semibold shadow-md transition duration-300 ease-in-out">
              Adoptar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
