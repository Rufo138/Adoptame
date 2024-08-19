import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar/Navbar';  // Ajusta la ruta según la ubicación de tu componente Navbar
import Footer from '../components/footer/Footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adoptame",
  description: "Adoptame es una plataforma que conecta personas que buscan adoptar perros con colaboradores que publican perritos disponibles en adopción. Encuentra a tu próximo mejor amigo en un solo lugar, de forma fácil y rápida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
