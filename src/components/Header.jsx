import React from "react";
import {
  RiSearchLine,
  RiFilter2Fill,
  RiArrowDownSLine,
  RiLogoutCircleRLine,

} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b bg-secondary-100 border-secondary-400 p-8 flex items-center justify-between">
      <form className="w-[50%]" action="" method="post">
        <div className="relative">
          <RiSearchLine className="absolute left-2 top-3" />
          <input placeholder="Buscar" type="text" className="bg-gray-700 py-2 pl-8 pr-4 outline-none rounded-lg w-full" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary"><span className="icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
            </span>
        </div>
      </form>
      
      <nav className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filtrar
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Buscar
          </button>
        </div>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="../../../public/dappermens10.png"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Dapper Men's</span>
              <RiArrowDownSLine />
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
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="../../../public/fotoadmin.png"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Administrador</span>
                <span className="text-xs text-gray-500">AdminDM@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/login"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>

        </Menu>
      </nav>
    </header>
  );
};

export default Header;