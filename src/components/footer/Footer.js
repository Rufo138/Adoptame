import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 <span className='text-green-500'>Green</span><span className='text-gold'>Gold</span></p>
        </div>
        <nav className="space-x-4">

        </nav>
      </div>
    </footer>
  );
}

export default Footer;