import React, { useState } from "react";
import { registerApi } from '../api/registerApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/userForm';

// Icons
import {
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

const Register = () => {

  const navigate = useNavigate();
  const { name, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
    username: '',
    phone: '',
  });
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    username: '',
    phone: '',
  });
  const [message, setMessage] = React.useState(null);
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    onInputChange(event);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Enviar los datos del registro a la base de datos
    try {
      const response = await registerApi.post('/auth/register', {
        name: user.name,
        phone: user.phone,
        email: user.email,
        username: user.username,
        password: user.password,
      });

      if (response.status === 200) {
        setMessage('User registered successfully');
      } else {
        const error = await response.json();
        setMessage(error.message);
      }

    } catch (error) {
      setMessage(error.message);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigate('/home', {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };
  const [showPassword, setShowPassword] = useState(false);



  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Crear <span className="text-primary">cuenta</span>
        </h1>
        {message && <div className="message">{message}</div>}
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-400 w-full rounded-full mb-8 text-green-400">
          <img
            src="../../../public/dappermens10.png"
            className="w-8 h-8"
          />
          DAPPER MEN'S
        </button>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name">Nombre:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre completo"
              required
              value={user.fullname}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email">Correo:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
              value={user.email}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone">Teléfono:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ingresa tu numero de celular"
              required
              value={user.phone}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa un nombre de usuario"
              required
              value={user.username}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              value={user.password}
              onChange={handleChange}
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

          <input type="submit" value="Resgistrarse" className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg" />
        </form>
      </div>
    </div>
  );
};
export default Register