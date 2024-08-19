"use client"; // Indica que este es un componente cliente

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Cambiamos useRouter por usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Botón del menú móvil */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icono cuando el menú está cerrado */}
              <svg
                className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icono cuando el menú está abierto */}
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start rounded-md">
            <div className="flex flex-shrink-0 items-center bg-black rounded-md">
              <img
                className="lg:mx-1 h-10 w-auto"
                src="images/logo3.png"
                alt="GreenGold"
              />
                  <span className="ml-2 text-white text-lg font-semibold p-2">
      Adoptame
    </span>
            </div>

            <div className="hidden sm:ml-6 sm:block w-full">
              <div className="flex space-x-4">
                {[
                    { href: '/', label: 'Inicio' },
                    { href: '/adopciones', label: 'Adopciones' },
                    { href: '/animales-perdidos', label: 'Animales Perdidos' },
                    { href: '/noticias', label: 'Noticias' },
                    { href: '/nosotros', label: 'Nosotros' },
                    { href: '/donaciones', label: 'Donaciones' },
                    { href: '/contacto', label: 'Contacto' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-md px-3 py-2 lg:text-base sm:text-sm font-medium ${
                      pathname === link.href
                        ? 'text-white bg-gold'
                        : 'text-white hover:bg-gold'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/adopciones', label: 'Adopciones' },
            { href: '/animales-perdidos', label: 'Animales Perdidos' },
            { href: '/noticias', label: 'Noticias' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/donaciones', label: 'Donaciones' },
            { href: '/contacto', label: 'Contacto' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === link.href
                        ? 'text-white bg-gold'
                        : 'text-white hover:bg-gold'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
