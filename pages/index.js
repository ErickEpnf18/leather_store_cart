import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import stylesProduct from "../styles/Product.module.css";
import google from "imgs/svgs/google.svg";
import facebook from "imgs/svgs/facebook.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import {
  auth,
  provider,
  signInWithFacebook,
  signInWithGoogle,
} from "firebase-config";
// redux
import { useDispatch } from 'react-redux'
import { login } from '../redux/reducers/authSlice'
import { addEmail } from '../redux/reducers/kartsSlice'
// redux
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import imgLogin from "imgs/auth/login.jpg";
import imgLogin_2 from "imgs/auth/leather_store.jpg";
import { useRouter } from 'next/router'
import { createItem } from "../service/api";
import { toast } from "react-toastify";
// schema yup
const schema = yup
  .object({
    email: yup.string().required("Campo incorrecto"),
    password: yup.string().required("Campo incorrecto"),
  })
  .required();
export default function Login() {

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter()
  const dispatch = useDispatch()
  // hookForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    try{

      const res = await axios.post("/api/auth/login", values);      
      const role = res.data?.role
      console.log("role", role, res)

      if (res.status === 200) {
        if (role === "admin") {
          toast.success(`${res.data.user} un gusto verte de nuevo.` , {
            position: "bottom-left",
          });
          dispatch(login(values));
          dispatch(addEmail(res.data.user));
          window.localStorage.setItem("currentUser", JSON.stringify(values));  

          router.push({pathname: '/admin', query: {jwt: "pdvwSchhINbT69qmUDNN"}})
        }
        if (role === "user"){ 
          dispatch(login(values));
          dispatch(addEmail(res.data.user.email));
          window.localStorage.setItem("currentUser", JSON.stringify(values));  

          toast.success(`${res.data.user.email} te esperan nuevos productos` , {
            position: "bottom-left",
          });

          router.push("/dashboard")
        }
      }
    }catch(err){
              toast.error(`A ocurrido un error intentalo de nuevo.` , {
                position: "bottom-left",
              });
    }
        

  });

  return (

    <div className={stylesProduct.loginCard}>
      <div className={stylesProduct.loginCardContainer}>
        <Card.Img
          src={imgLogin_2.src}
          width="30"
          height="400"
          className={stylesProduct.cardImageLogin}
        />
        <Card border="secondary" style={{ width: "30rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Title className="text-center">Bienvenido</Card.Title>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  placeholder="Ingresa el email"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value })
                  }
                  type="email"
                  {...register("email")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.email?.message}
                </Typography>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  placeholder="Ingresa la contraseña"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                  type="password"
                  {...register("password")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.password?.message}
                </Typography>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-center "
                >
                  Ingresar
                </Button>
                <Typography
                   variant="caption"
                   style={{ color: "black" }}
                   className="ms-4 mt-3 text-center"
                 >
                  ¿Aun no tienes cuenta? {" "}
                   <Link href="/signup"> Registrate aqui!</Link>
                 </Typography>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
