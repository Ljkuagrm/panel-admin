import React, { useEffect, useState } from "react";
import { Await, Link, useLocation,} from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import Modal from "../../components/Modal";
import { useParams } from 'react-router-dom';
import { resp } from "../../assets/JsonDatos";




const ViewEdit = () => {
    {/*variable para guarda datos Json*/}    
    const [dato, setDato] = useState([]);
    const { pm } = useParams();
    
    let titulo,id="ID",col1,col2,col3="",col4="";
  
    switch (pm) {
      case '1':
        titulo = "CATEGORIA";
        col1 = "Nombre"
        col2 = "id_categoria_padre"
        break;
      case '2':
        titulo = "MARCA";
        col1 = "Nombre"
        col2 = "Pais"
        break;
      case '3':
        titulo = "COLOR";
        col1 = "Nombre"
        col2 = "Descripcion"
        break;
        case '4':
          titulo = "BODEGA";
          col1 = "Descripcion"
          col2 = "Capacidad"
          break;
      default:
        ttitulo = "";;
        break;
    }

    {/*Traer Axios*/} 
    const getDatos = () => {
      setDato(resp);
    } 
    {/*Ejecutar GetDatos*/} 
    useEffect(()=>{
      getDatos()
    }, []);


    const handleDelete = (id) => {
      const confirmDelete = window.confirm("¿Está seguro de que desea eliminar este elemento?");
      if (confirmDelete) {
        const updatedItems = dato.filter((item) => item.id !== id);
        setDato(updatedItems);
      }
    }




    console.log(dato);
    {/*iniciar ventana modal*/}
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
      setShowModal(false);
    }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className='user'>
          {/*Titulo primario de la vista o pagina*/}
          <h1 className="text-4xl text-secondary-400 font-bold">{titulo}</h1>
		    </div>
        <div>
          {/*Boton para crear elemento*/}
          <button className="rounded-lg border-4 border-black transition-colors font-bold text-secondary-100 bg-primary hover:bg-green-600 hover:text-secondary-900  flex items-center gap-2 py-4 px-10 flex-1"
            onClick={() => setShowModal(true)}
            > 
            Crear
          </button>
          <Modal showModal={showModal} handleClose={handleClose} titulo="bodega" etiqueta1="descripcion" etiqueta2="capacidad"></Modal>  
        </div>
        <div></div>
      </div>
      {/*titulo secundario*/}
      <div>
        <h1 className="text-2xl text-secondary-400 my-2 font-bold">Lista de Elementos</h1>
      </div>

      {/*iniciar titulos de las columnas de datos*/}
      <div className="bg-secondary-200 p-8 rounded-xl">
        <div className="hidden md:grid md:grid-cols-5 space-x-4 gap-1 mb-5 p-4 items-center">
          <h5 className="text-secondary-400 font-bold mb-2 col-span-1 text-center">{id}</h5>
          <h5 className="text-secondary-400 font-bold mb-2">{col1}</h5>
          <h5 className="text-secondary-400 font-bold mb-2">{col2}</h5>
        </div> 
        {/*modificar para la cantidad N de columnas md:grid-cols-N*/}

        {/*Bucle para recorrer y traer cada elemento del Json:Dato*/}
        {dato.length === 0 ? (
          <h3 className="text-2xl text-secondary-400 my-2 font-bold">No exixten elementos en esta momento</h3>
        ) : (
          dato.map((item, index) => (
          <li key={index}>
            {/*iniciar columnas de elementos de datos*/}
            <div className="md:grid md:grid-cols-5 space-x-4 gap-1 mb-4 bg-secondary-900 p-4 rounded-xl">
              <div>
                <h5 className=" text-secondary-400 mb-2 col-span-1 text-center">{item.id}</h5>
              </div>
              <div>
                {/*Visualizar como movil*/}
                <h5 className="md:hidden text-secondary-400 font-bold mb-2">{col1}</h5>
                {/*Visualizar como escritorio*/}
                <p className="text-secondary-400">{item.nombre}</p>
              </div>
              <div>
                <h5 className="md:hidden text-secondary-400 font-bold mb-2">{col2}</h5>
                <span className="text-secondary-400">{item.email}</span>
              </div>
              <div className="flex space-x-4">
                <button className="rounded-lg justify-center transition-colors text-gray-300 bg-secondary-100 hover:bg-secondary-400 flex items-center gap-x-4 p-2 flex-1"
                  onClick={() => setShowModal(true)}
                > 
                  Editar
                </button>
                <Modal showModal={showModal} handleClose={handleClose} titulo={titulo} etiqueta1={col1} etiqueta2={col2}></Modal>
                <button className="rounded-lg justify-center transition-colors text-gray-300 bg-red-900 hover:bg-red-700 flex items-center gap-x-4 p-2 flex-1"
                  onClick={() => handleDelete(item.id)}
                > 
                    Eliminar
                </button>
              </div>
          
            </div>

          </li>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewEdit;
