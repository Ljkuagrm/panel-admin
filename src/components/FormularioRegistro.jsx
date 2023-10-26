import React, { useState } from 'react';
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

const FormularioRegistro = () => {

  const tallas = ListaTallas.map((talla) => ({
    value: talla.id,
    label: talla.talla,
  }));


  const [productos, setProductos] = useState([
    { producto: '', talla: null, cantidad: '' },
  ]);

  const agregarProducto = () => {
    const nuevoProducto = { producto: '', talla: null, cantidad: '' };
    setProductos([...productos, nuevoProducto]);
  };

  const handleProductoChange = (value, index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].producto = value;
    setProductos(nuevosProductos);
  };

  const handleTallaChange = (value, index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].talla = value;
    setProductos(nuevosProductos);
  };

  const handleCantidadChange = (value, index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].cantidad = value;
    setProductos(nuevosProductos);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
    console.log(productos);
  };

  return (
    <div className='bg-secondary-400'>
      <form onSubmit={handleSubmit}>
        {productos.map((producto, index) => (
          <div key={index}>
            <label>Producto:</label>
            <input
              type="text"
              value={producto.producto}
              onChange={(e) => handleProductoChange(e.target.value, index)}
            />

            <label>Talla:</label>
            <Select
              options={tallas}
              value={producto.talla}
              onChange={(selectedOption) => handleTallaChange(selectedOption, index)}
              isSearchable
              placeholder="Seleccionar Talla"
            />

            <label>Cantidad:</label>
            <input
              type="number"
              value={producto.cantidad}
              onChange={(e) => handleCantidadChange(e.target.value, index)}
            />

            <button type="button" onClick={() => eliminarProducto(index)}>
              Eliminar
            </button>
          </div>
        ))}

        <button type="button" onClick={agregarProducto}>
          Agregar Producto
        </button>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;