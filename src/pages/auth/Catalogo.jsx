import React from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";

const Catalogo = () => {
  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-secondary-400">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-8 py-4 bg-secondary-100">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="../../../public/dappermens10.png"
            alt="Dapper Men's Logo"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-primary">Dapper Men's</h1>
        </div>
        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="py-2 px-4 mr-4 bg-secondary-900 text-secondary-400 outline-none rounded-lg"
          />
          <RiSearch2Line className="text-secondary-400 text-xl" />
        </div>
        {/* Authentication Buttons */}
        <div className="flex items-center">
          <Link
            to="/login"
            className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-green-900 mx-4 transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/login/registro"
            className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-blue-900 transition-colors"
          >
            Registrarse
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Resto del contenido de la página */}
        {/* Puedes agregar aquí el contenido principal de tu página */}
        <img src="../../../public/low.png" alt="Imagen de presentacion" style={{ width: 'auto', height: '600px' }}/>
        
      </div>
    </div>
  );
};

export default Catalogo;