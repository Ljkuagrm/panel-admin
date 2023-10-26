import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, MenuButton, MenuDivider, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


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


  const [showSubmenu1, setShowSubmenu1] = useState(false);


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
            {/*BOTON USUARIOS*/}
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <AiOutlineUsergroupAdd className="text-primary" /> Usuarios
              </Link>
            </li>
            {/*BOTON PRODUCTO*/}
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
              {/*DEFINIR SUBMENU PRODUCTO*/}
              <ul
                className={` ${
                  //MODIFICAR EL ALTO h-180px para 4
                  showSubmenu ? "h-[240px]" : "h-0"
                  } overflow-y-hidden transition-all`}
              >
                {/*PRODUCTO-CATEGORIA*/}
                <li>
                  <Link to={`/vista/${1}`}>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                    onClick={() => setShowModalCategoria(true)}
                  >
                    Categoria
                  </button>
                  </Link>
                  <Modal showModal={showModalCategoria} handleClose={handleClose} titulo="Categoria" etiqueta1="Nombre" etiqueta2="id_categoria_padre"></Modal>
                </li>
                {/*PRODUCTO-MARCA*/}
                <li>
                  <Link to={`/vista/${2}`}>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                    onClick={() => setShowModalMarca(true)}
                  >
                    Marca
                  </button>
                  </Link>
                  <Modal showModal={showModalMarca} handleClose={handleClose} titulo="Marca" etiqueta1="Nombre" etiqueta2="Pais"></Modal>
                </li>
                {/*PRODUCTO-COLOR*/}
                <li>
                  <Link to={`/vista/${3}`}>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                    onClick={() => setShowModalColor(true)}
                  >
                    Color
                  </button>
                  </Link>
                  <Modal showModal={showModalColor} handleClose={handleClose} titulo="Color" etiqueta1="Nombre" etiqueta2="Descripcion"></Modal>
                </li>
                {/*PRODUCTO-BODEGA*/}
                <li>
                  <Link to={`/vista/${4}`}>
                  <button className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                    onClick={() => setShowModalBodega(true)}
                  > 
                    Bodega
                  </button>
                  </Link>
                  <Modal showModal={showModalBodega} handleClose={handleClose} titulo="Bodega" etiqueta1="Descripcion" etiqueta2="Capacidad"></Modal>
                </li>

                {/*Boton Pruebas con Submenu Acciones-bodega*/}
                <li>   
                  <Menu
                    menuButton={
                      <MenuButton className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                      >
                        Acciones
                      </MenuButton>
                    }
                    align="end" arrow transition menuClassName="bg-secondary-200"
                  >
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to={`/vista/${4}`}
                        className="rounded-lg transition-colors text-secondary-400 hover:bg-primary flex items-center gap-x-4 p-2 flex-1"
                      >
                        Mostrar
                      </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <button className="rounded-lg transition-colors text-secondary-400 hover:bg-primary flex items-center gap-x-4 p-2 flex-1"
                      onClick={() => setShowModalBodega(true)}
                      > 
                        Editar
                      </button>
                      <Modal showModal={showModalBodega} handleClose={handleClose} titulo="bodega" etiqueta1="descripcion" etiqueta2="capacidad"></Modal>
                    </MenuItem>
                  </Menu>
                </li>


              </ul>
            </li>
            {/*Boton para Soporte*/}
            <li>
              <Link
                to="/soporte"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte
                técnico
              </Link>
            </li>
            {/*Boton para pruebas*/}
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
      {/*Boton flotante para movil Esconde el Sidebar */}
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
