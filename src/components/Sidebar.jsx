import React, { useState } from "react";
import { Link } from "react-router-dom";

// Iconos
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { LiaTshirtSolid } from "react-icons/lia"
import {
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { ImHome, } from "react-icons/im";
import Modal from "./Modal";
import { registerApi } from "../pages/api/registerApi";

const Sidebar = () => {

  const [showMenu, setShowMenu] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const [showModalCategoria, setShowModalCategoria] = useState(false);
  const [showModalMarca, setShowModalMarca] = useState(false);
  const [showModalColor, setShowModalColor] = useState(false);
  const [showModalBodega, setShowModalBodega] = useState(false);

  
    const handleClose = () => {
      setShowModalCategoria(false);
      setShowModalMarca(false);
      setShowModalColor(false);
      setShowModalBodega(false);
    }


  // Boton de Marca para enviar datos
  const handleMarca = async () => {
    setShowModalMarca(false);
    console.log(showModalMarca.valueOf)
    // Enviar los datos del registro a la base de datos
  }

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"
          } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            DAPPER <span className="text-primary text-2xl">MEN'S</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <AiOutlineUsergroupAdd className="text-primary" /> Usuarios
              </Link>
            </li>

            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <LiaTshirtSolid className="text-primary" /> Productos
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${showSubmenu && "rotate-90"
                    } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  //h 130px para 3
                  showSubmenu ? "h-[180px]" : "h-0"
                  } overflow-y-hidden transition-all`}
              >

                <li>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalCategoria(true)}
                  >
                    Categoria
                  </button>
                  <Modal showModal={showModalCategoria} handleClose={handleClose} titulo="category" etiqueta1="nombre" etiqueta2="id_categoria_padre"></Modal>
                </li>
                <li>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalMarca(true)}
                  >
                    Marca
                  </button>
                  <Modal showModal={showModalMarca} handleClose={handleClose} titulo="marca" etiqueta1="nombre" etiqueta2="pais"></Modal>
                </li>
                <li>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalColor(true)}
                  >
                    Color
                  </button>
                  <Modal showModal={showModalColor} handleClose={handleClose} titulo="color" etiqueta1="nombre" etiqueta2="descripcion"></Modal>
                </li>
                <li>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalBodega(true)}
                  >
                    Bodega
                  </button>
                  <Modal showModal={showModalBodega} handleClose={handleClose} titulo="bodega" etiqueta1="descripcion" etiqueta2="capacidad"></Modal>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/soporte"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte
                técnico
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" /> Pruebas
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <ImHome className="text-primary" /> Home
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-8 w-16 h-16 bg-secondary-400 text-primary p-5 rounded-full z-50 flex items-center justify-center"
      >
        {showMenu ? <RiCloseLine className="w-8 h-8" /> : <RiMenu3Line className="w-8 h-8" />}
      </button>
    </>
  );
};

export default Sidebar;
