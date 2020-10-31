import React, { useState } from "react";
import "../assets/styles/Login.scss";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {saveLogin} from '../redux/mortyDucks'
const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const [info, setInfo] = useState();
  const onSubmit = data => {
    dispatch(saveLogin(data))
    props.history.push('/')
  };
  const handleInput=(event)=>{
    console.log(event.target.value)
    setInfo({
      ...info,
      [event.target.name]:event.target.value
    })
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 5,
              message: "Mínimo 5 carácteres",
            },
          })}
          onChange={handleInput}
        />
        <span>{errors?.name?.message}</span>
        <input
          type="email"
          placeholder="email"
          name="email"
          ref={register({
            required: {
              value: true,
              message: "email es requerido",
            },

            minLength: {
              value: 5,
              message: "Mínimo 5 carácteres",
            },
          })}
          onChange={handleInput}
        />
        <span>{errors?.email?.message}</span>
        <input
          name="password"
          type="password"
          placeholder="su contraseña..."
          ref={register({
            required: {
              value: true,
              message: "password es requerido",
            },
            minLength: {
              value: 5,
              message: "Mínimo 5 carácteres",
            },
          })}
          onChange={handleInput}
        />
        <span>{errors?.password?.message}</span>
        <p>olvido su contraseña?</p>
        <a href="">recuperar contraseña</a>
        <input type="submit" name="submit" id="submit" />
        <Link to='/'>Volver a Home</Link>
      </form>
    </div>
  );
};
export default Login;
