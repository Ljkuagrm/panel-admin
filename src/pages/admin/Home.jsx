import React from "react";
import { Link, useLocation,} from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const { state } = useLocation();

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className='user'>
          <h1 className="text-4xl text-secondary-400 font-bold">Bienvenido, {state?.name}</h1>
				</div>
      
        <div className="flex items-center text-secondary-400 gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-secondary-200 transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-secondary-200 transition-colors" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-secondary-400 my-10 font-bold">Notas más recientes</h1>
      </div>
      <div className="bg-secondary-200 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-secondary-400 font-bold mb-2">ID</h5>
          <h5 className="text-secondary-400 font-bold mb-2">Descripción</h5>
          <h5 className="text-secondary-400 font-bold mb-2">Estatus</h5>
          <h5 className="text-secondary-400 font-bold mb-2">Fecha</h5>
          <h5 className="text-secondary-400 font-bold mb-2">Acciones</h5>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">ID</h5>
            <span className="text-secondary-400">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">Descripción</h5>
            <p className="text-secondary-400">Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Abierto
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">Fecha</h5>
            <span className="text-secondary-400">28 Agosto 2023</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              transition
              menuClassName="bg-secondary-400 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span className="text-secondary-400">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
            <p className="text-secondary-400">Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              En proceso
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
            <span className="text-secondary-400">28 Agosto 2023</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">ID</h5>
            <span className="text-secondary-400">#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">Descripción</h5>
            <p className="text-secondary-400">Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Cerrado
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-secondary-400 font-bold mb-2">Fecha</h5>
            <span className="text-secondary-400">28 Agosto 2023</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
