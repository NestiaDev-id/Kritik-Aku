import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">QnA App</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-green-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
