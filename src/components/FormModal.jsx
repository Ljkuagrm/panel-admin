import React, { useState } from 'react';
import { IoMdCloseCircleOutline, } from "react-icons/io"
import Select from 'react-select';


const ListaTallas = [
  { "id": 1, "talla": "S" },
  { "id": 2, "talla": "M" },
  { "id": 3, "talla": "L" },
  { "id": 4, "talla": "G" },
  { "id": 5, "talla": "2G" },
  { "id": 6, "talla": "XL" },
  { "id": 7, "talla": "XXL" },
  { "id": 8, "talla": "XS" },
  { "id": 9, "talla": "XXS" },
  { "id": 10, "talla": "38" },
  { "id": 11, "talla": "40" },
  { "id": 12, "talla": "XXG" },
];
const ListaProductos = [
  { "id": 1, "nombre": "polera" },
  { "id": 2, "nombre": "pantalon" },
  { "id": 3, "nombre": "camisa" },
  { "id": 4, "nombre": "jeans" },
  { "id": 5, "nombre": "zapato" },
  { "id": 6, "nombre": "bermuda" },
  { "id": 7, "nombre": "camisa" },
  { "id": 8, "nombre": "saco" },
  { "id": 9, "nombre": "medias" },
  { "id": 10, "nombre": "guantes" },
  { "id": 11, "nombre": "gorra" },
  { "id": 12, "nombre": "sombrero" },
];

//const FormModal = ({showModal, handleClose, titulo, etiqueta1, etiqueta2, etiqueta3 = "", etiqueta4 = "", etiqueta5 = ""}) => {
const FormModal = ({ showModal, handleClose, titulo }) => {
    const [detalle, setDetalle] = useState('');
    const [fecha, setFecha] = useState('');
    const [productos, setProductos] = useState([
      {
        producto: '',
        talla: '',
        cantidad: '',
      },
    ]);
  
    const tallas = ListaTallas.map((talla) => ({
      value: talla.id,
      label: talla.talla,
    }));
    const productosOptions = ListaProductos.map((producto) => ({
      value: producto.id,
      label: producto.nombre,
    }));
  
    const handleDetalleChange = (e) => {
      setDetalle(e.target.value);
    };
  
    const handleFechaChange = (e) => {
      setFecha(e.target.value);
    };
  
    const handleProductoChange = (selectedOption, index) => {
      const updatedProductos = [...productos];
      updatedProductos[index].producto = selectedOption;
      setProductos(updatedProductos);
    };
  
    const handleTallaChange = (selectedOption, index) => {
      const updatedProductos = [...productos];
      updatedProductos[index].talla = selectedOption;
      setProductos(updatedProductos);
    };
  
    const handleCantidadChange = (e, index) => {
      const updatedProductos = [...productos];
      updatedProductos[index].cantidad = e.target.value;
      setProductos(updatedProductos);
    };
  
    const agregarProducto = () => {
      setProductos([
        ...productos,
        {
          producto: '',
          talla: '',
          cantidad: '',
        },
      ]);
    };
  
    const eliminarProducto = (index) => {
      const updatedProductos = [...productos];
      updatedProductos.splice(index, 1);
      setProductos(updatedProductos);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Crear un objeto con los datos del formulario
      const formData = {
        detalle,
        fecha,
        productos,
      };
  
      // Mostrar los datos en la consola
      console.log(formData);
  
      // Puedes resetear el formulario aquí si es necesario
      setDetalle('');
      setFecha('');
      setProductos([
        {
          producto: '',
          talla: '',
          cantidad: '',
        },
      ]);
    };
  
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
        <div className="bg-secondary-400 w-full max-w-screen-md mx-4 rounded-lg shadow-lg p-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary-400 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold uppercase">{titulo}</h3>
              <button
                className="bg-transparent rounded-full h-8 w-8 text-black float-right flex items-center justify-center"
                onClick={handleClose}
              >
                <IoMdCloseCircleOutline className="text-black opacity-7 h-8 w-8 text-xl block bg-red-400 py-0 rounded-full" />
              </button>
            </div>
            <h4 className="flex justify-center items-center" id="message"></h4>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit}>
                <label className="block text-black text-sm font-bold mb-1">Detalle</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  onChange={handleDetalleChange}
                />
                <label className="block text-black text-sm font-bold mb-1">Fecha</label>
                <input
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  onChange={handleFechaChange}
                />
                {productos.map((producto, index) => (
                  <div key={index}>
                    <label className="block text-black text-sm font-bold mb-1">Producto</label>
                    <Select
                      className="shadow appearance-none border rounded w-2/4 py-2 px-1 text-black inline-block"
                      value={producto.producto}
                      options={productosOptions}
                      onChange={(selectedOption) => handleProductoChange(selectedOption, index)}
                      placeholder="Producto"
                      isSearchable
                    />
                    <Select
                      className="shadow appearance-none border rounded w-1/4 py-2 px-1 text-black inline-block"
                      value={producto.talla}
                      options={tallas}
                      onChange={(selectedOption) => handleTallaChange(selectedOption, index)}
                      placeholder="Talla"
                      isSearchable
                    />
                    <input
                      type="number"
                      value={producto.cantidad}
                      onChange={(e) => handleCantidadChange(e, index)}
                      placeholder="Cantidad"
                      className="shadow appearance-none border rounded w-1/4 py-2 px-1 text-black"
                    />
                    <button type="button" onClick={() => eliminarProducto(index)}>
                      Eliminar Producto
                    </button>
                  </div>
                ))}
                <button type="button" onClick={agregarProducto}>
                  Agregar Producto
                </button>
                <button type="submit">Registrar</button>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-secondary-400  bg-red-400 active-bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              <button className="text-secondary-400 bg-green-400 active-bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormModal;