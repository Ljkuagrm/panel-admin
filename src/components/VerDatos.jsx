import React, { useState, useEffect } from "react";
import { Link, useLocation, } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const VerDatos = () => {
    const { state } = useLocation();
    const [data, setData] = useState([]); // Estado para almacenar los datos de la API

    // TODO: Aqui va ser con axios
    useEffect(() => {
        // Función para hacer la petición a la API
        const fetchData = async () => {
            try {
                // Realiza una petición a la API y actualiza el estado con los datos
                const response = await fetch(`URL_DE_TU_API_AQUI/${state?.name}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                }
            } catch (error) {
                console.error("Error al obtener los datos de la API:", error);
            }
        };

        // Llama a la función de obtención de datos cuando se monta el componente
        fetchData();
    }, [state]);

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <div className='user'>
                    <h1 className="text-4xl text-secondary-400 font-bold">Categoria, {state?.name}</h1>
                </div>

                <div className="flex items-center text-secondary-400 gap-2 text-3xl">
                    <RiArrowLeftSLine className="hover:cursor-pointer hover:text-secondary-200 transition-colors" />
                    <RiArrowRightSLine className="hover:cursor-pointer hover:text-secondary-200 transition-colors" />
                </div>
            </div>
            <div>
                <h1 className="text-2xl text-secondary-400 my-10 font-bold">Notas más recientes</h1>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.nombre} - {item.descripcion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VerDatos;
