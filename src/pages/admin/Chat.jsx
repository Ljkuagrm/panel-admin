import React, { useState } from "react";
import Modal from "../../components/Modal";
import FormModal from "../../components/FormModal";

const Chat = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
    {/*    
    <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
      <button
        className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={handleShow}
      >
        Fill Details
      </button>
      <Modal showModal={showModal} handleClose={handleClose}></Modal>
    </div>
  */}
    <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
        <button
          className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={handleShow}
        >
          Ventana Modal
        </button>
        <FormModal showModal={showModal} handleClose={handleClose} titulo="Formulario" etiqueta1="Descripcion" etiqueta2="Fecha" etiqueta3="Producto"></FormModal>
    </div>
    </>
  );
};

export default Chat;
