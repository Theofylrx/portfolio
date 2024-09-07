import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4 flex justify-center">
      <nav>
        <ul className="flex space-x-4 bg-gray-800 rounded-full px-6 py-2">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-full transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-full transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-full transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/tech-stack" className="text-gray-300 hover:text-white px-3 py-2 rounded-full transition duration-300">
              Stack
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;