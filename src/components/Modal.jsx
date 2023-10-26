import { IoMdCloseCircleOutline, } from "react-icons/io"
import { registerApi } from "../pages/api/registerApi";

const Modal = ({ showModal, handleClose, titulo, etiqueta1, etiqueta2, etiqueta3 = "", etiqueta4 = ""}) => {

  const guardado = async () => {
    try {
      const response = await registerApi.post(`/${titulo}`, {
        [etiqueta1]: document.getElementById("date1").value,
        [etiqueta2]: document.getElementById("date2").value === "" ? null : document.getElementById("date2").value,
      });

      // Enviar un mensaje de registro completado
      if (response.status === 200) {
        document.getElementById("message").style.color = "green" ;
        document.getElementById("message").innerText = `se añadió a '${titulo}' correctamente` ;
        document.getElementById("date1").value = "";
        document.getElementById("date2").value = "";
        // En caso de no enviar datos mandar un status de error
      } else {
        const error = await response.json();
        document.getElementById("message").style.color = "red" ;
        document.getElementById("message").innerText = error.message;
      }

      // En caso de no enviar datos mandar un status de error
    } catch (error) {
      document.getElementById("message").style.color = "red" ;
      document.getElementById("message").innerText = error.message;
    }
  }

  return (
    <>
     {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary-400 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold uppercase">{titulo}</h3>
                  <button
                    className="bg-transparent rounded-full h-8 w-8 text-black float-right flex items-center justify-center"
                    onClick={handleClose}
                  >
                    <IoMdCloseCircleOutline className="text-black opacity-7 h-8 w-8 text-xl block bg-red-400 py-0 rounded-full"></IoMdCloseCircleOutline>
                  </button>
                </div>
                <h4 className="flex justify-center items-center" id="message"></h4>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      {etiqueta1}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" id="date1"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      {etiqueta2}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" id="date2"/>
                    {(etiqueta3 !== "") ? <>
                      <label className="block text-black text-sm font-bold mb-1">
                        Address
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    </> : null}
                    {(etiqueta4 !== "") ? <>
                      <label className="block text-black text-sm font-bold mb-1">
                        City
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    </> : null}
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-secondary-400  bg-red-400 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    className="text-secondary-400 bg-green-400 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={guardado}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
