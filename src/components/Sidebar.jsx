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


  // Boton de Marca para enviar datos
  const handleCategory = async () => {
    setShowModalCategoria(false);

    // Enviar los datos del registro a la base de datos
    try {

      const response = await registerApi.post('/category', {
        nombre: document.getElementById("date1").value,
        id_categoria_padre: {
          id: document.getElementById("date2").value
        },
      });

      // Enviar un mensaje de registro completado
      if (response.status === 200) {
        document.getElementById("message").innerText = "Categoria registrada";

        // En caso de no enviar datos mandar un status de error
      } else {
        const error = await response.json();
        document.getElementById("message").innerText = error.message;
      }

      // En caso de no enviar datos mandar un status de error
    } catch (error) {
      document.getElementById("message").innerText = error.message;
    }
  }

  // Boton de Marca para enviar datos
  const handleMarca = async () => {
    setShowModalMarca(false);

    // Enviar los datos del registro a la base de datos
    try {
      const response = await registerApi.post('/marca', {
        nombre: document.getElementById("date1").value,
        pais: document.getElementById("date2").value,
      });

      // Enviar un mensaje de registro completado
      if (response.status === 200) {
        document.getElementById("message").innerText = "Marca registrada";

        // En caso de no enviar datos mandar un status de error
      } else {
        const error = await response.json();
        document.getElementById("message").innerText = error.message;
      }

      // En caso de no enviar datos mandar un status de error
    } catch (error) {
      document.getElementById("message").innerText = error.message;
    }
  }

  // Boton de Color para enviar datos
  const handleColor = async () => {
    setShowModalColor(false);

    // Enviar los datos del registro a la base de datos
    try {
      const response = await registerApi.post('/color', {
        nombre: document.getElementById("date1").value,
        descripcion: document.getElementById("date2").value,
      });

      // Enviar un mensaje de registro completado
      if (response.status === 200) {
        document.getElementById("message").innerText = "Color registrada";

        // En caso de no enviar datos mandar un status de error
      } else {
        const error = await response.json();
        document.getElementById("message").innerText = error.message;
      }

      // En caso de no enviar datos mandar un status de error
    } catch (error) {
      document.getElementById("message").innerText = error.message;
    }
  }

  // Boton de Marca para enviar datos
  const handleBodega = async () => {
    setShowModalBodega(false);

    // Enviar los datos del registro a la base de datos
    try {
      const response = await registerApi.post('/bodega', {
        descripcion: document.getElementById("date1").value,
        capacidad: document.getElementById("date2").value,
      });

      // Enviar un mensaje de registro completado
      if (response.status === 200) {
        document.getElementById("message").innerText = "Bodega registrada";

        // En caso de no enviar datos mandar un status de error
      } else {
        const error = await response.json();
        document.getElementById("message").innerText = error.message;
      }

      // En caso de no enviar datos mandar un status de error
    } catch (error) {
      document.getElementById("message").innerText = error.message;
    }

    // Espera de unos segundo
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
                  <div className="flex items-center">
                    <button
                      className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                      onClick={() => setShowModalCategoria(true)}
                    >
                      Categoria
                    </button>

                    <button className="py-2 px-4 border-l border-gray-500 ml-2 text-primary hover:text-white transition-colors">
                      <Link to="/VerDatos">Ver</Link>
                    </button>
                  </div>
                  <Modal showModal={showModalCategoria} handleClose={handleCategory} titulo="CATEGORÍA" etiqueta1="Nombre" etiqueta2="Super Categoría"></Modal>
                </li>
                <li>
                <div className="flex items-center">
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalMarca(true)}
                  >
                    Marca
                  </button>
                  <button className="py-2 px-4 border-l border-gray-500 ml-2 text-primary hover:text-white transition-colors">
                    Ver
                  </button>
                  <Modal showModal={showModalMarca} handleClose={handleMarca} titulo="MARCA" etiqueta1="Nombre" etiqueta2="País"></Modal>
                </div>
                </li>
                <li>
                <div className="flex items-center">
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalColor(true)}
                  >
                    Color
                  </button>
                  <button className="py-2 px-4 border-l border-gray-500 ml-2 text-primary hover:text-white transition-colors">
                    Ver
                  </button>
                  <Modal showModal={showModalColor} handleClose={handleColor} titulo="COLOR" etiqueta1="Nombre" etiqueta2="Descripción"></Modal>
                </div>
                </li>
                <li>
                <div className="flex items-center">
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    onClick={() => setShowModalBodega(true)}
                  >
                    Bodega
                  </button>
                  <button className="py-2 px-4 border-l border-gray-500 ml-2 text-primary hover:text-white transition-colors">
                    Ver
                  </button>
                  <Modal showModal={showModalBodega} handleClose={handleBodega} titulo="Bodega" etiqueta1="Descripción" etiqueta2="Capacidad"></Modal>
                </div>
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
