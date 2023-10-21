import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/userForm';

// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { registerApi } from "../api/registerApi";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { name, email, password, onInputChange, onResetForm } =
    useForm({
      name: '',
      email: '',
      password: '',
    });

  const onLogin = async (e) => {
    e.preventDefault();

    const username = name;
    const contraseña = password;

    // Verificar si el usuario que se registró es CLIENTE
    const response = await registerApi.post(`/usuario/login?username=${username}&password=${contraseña}`);

    const role = await registerApi.post(`/usuario/getRole?username=${username}`);

    //console.log(role.data)


    if (role.status === 200 && response.data.role === 'CLIENTE') {
      // Redirigir al usuario a la ventana de dashboard
      navigate('/home', {
        replace: true,
        state: {
          logged: true,
          name,
        },
      });
    } else {
      // Redirigir al usuario a otra página, por ejemplo la página de inicio de sesión
      navigate('/', {
        replace: true,
        state: {
          logged: true,
          name,
        },
      });
    }



    onResetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          INICIAR <span className="text-primary">SESIÓN</span>
        </h1>
        <form onSubmit={onLogin}>
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-400 w-full rounded-full mb-8 text-green-400">
            <img
              src="../../../public/dappermens10.png"
              className="w-8 h-8"
            />
            DAPPER MEN'S
          </button>
          <div className="relative mb-4">
            <label htmlFor='name'>Nombre:</label>
            <input
              className="py-3 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type='text'
              name='name'
              id='name'
              value={name}
              placeholder="Nombre de usuario"
              onChange={onInputChange}
              required
              autoComplete='off'
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="py-3 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              value={password}
              onChange={onInputChange}
              autoComplete='on'
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 hover:cursor-pointer text-secondary-400"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 hover:cursor-pointer text-secondary-400"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-500 transition-colors"
          >
            Ingresar
          </button>
        </form>

        <div className="flex flex-col p-4 items-center gap-4">
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="registro"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;