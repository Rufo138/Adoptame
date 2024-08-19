import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="max-w-full mx-auto relative py-10 px-6">
        {/* Imagen de fondo */}
        <img 
          src="images/extractor/banner.jpg" 
          alt="Extractor de BHO" 
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        
        {/* Capa de fondo negro con opacidad */}
        <div className="absolute inset-0 bg-black opacity-0 rounded-md"></div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center md:text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenidos a 
              <span className="text-green-500"> Green</span>
              <span className="text-gold">Gold</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
