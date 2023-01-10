import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Home.module.css";
import { Card } from "react-bootstrap";
import stylesProduct from "../../styles/Product.module.css";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import imgLogin from "imgs/auth/login.jpg";
import { useRouter } from "next/router";
import { createItem, setNewDoc } from "../../service/api";

// schema yup
const schema = yup
  .object({
    username: yup.string().required("Campo incorrecto"),
    name: yup.string().required("Campo incorrecto"),
    email: yup.string().required("Campo incorrecto"),
    password: yup.string().required("Campo incorrecto"),
    repassword: yup.string().required("Campo incorrecto"),
  })
  .required();
export default function Login(props) {
  const {handlerBack} = props;
  handlerBack({view: false})
  const [userInfo, setUserInfo] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await onAuthStateChanged(auth, (currentUser) => {
        // console.log("auth", auth);
        if (currentUser) {
          const uid = user.uid;
        } else {
        }
        setUser(currentUser);
      });
    })();
  }, [user]);

  // hookForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((values) => {
    console.log("values", values);
    (async () => {
      const {name, username, password, repassword, email} = values;
      if (password !== repassword) {
        setError("Ingresa correctamente las dos contraseñas");
      } else {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(user);
          //setError("");

          //router.push("/dashboard");
        } catch (error) {
          console.log(error.message);
          setError("Usuario no registrado");
        }

        // sendDataFirestore(username, email, password);
        sendDataToUsersFireStore(name, username, email, password);
      }
    })();
  });
const sendDataToUsersFireStore = (nm, usernm, email, password) => {
  let obj = {name: handleUpperCase(nm), username: handleUpperCase(usernm), email: email, password: password}
    // id, obj, col
    setNewDoc(email, obj, "users")
}
  const sendDataFirestore = (username, email, password) => {
    let userName = handleUpperCase(username);
    const obj = { username: userName, email: email, password: password };
    createItem(obj, "users");
  };
  1;
  const handleUpperCase = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };
  return (
    <div className={stylesProduct.loginCard}>
      <div className={stylesProduct.loginCardContainer}>
        {/* <button onClick={handleUpperCase}>send name</button> */}
        <Card.Img
          src={imgLogin.src}
          width="100"
          height="650"
          className={stylesProduct.cardImage}
        />
        <Card border="secondary" style={{ width: "30rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Title className="text-center">Registrate</Card.Title>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el nombre de usuario"
                  onChange={({ target }) => {
                    setUserInfo({ ...userInfo, username: target.value });
                  }}
                  {...register("username")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.username?.message}
                </Typography>
              </Form.Group>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el nombre completo"
                  onChange={({ target }) => {
                    setUserInfo({ ...userInfo, name: target.value });
                  }}
                  {...register("name")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.name?.message}
                </Typography>
              </Form.Group>

              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  placeholder="Ingresa el correo electronico"
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
              <Form.Group className="" controlId="formBasicPassword">
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
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Repite la contraseña</Form.Label>
                <Form.Control
                  placeholder="Reingresa la contraseña"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, repassword: target.value })
                  }
                  type="password"
                  {...register("repassword")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.repassword?.message}
                </Typography>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-center "
                >
                  Registrarse
                </Button>
                {error ? (
                  <Typography
                    variant="caption"
                    style={{ color: "red" }}
                    className="ms-2"
                  >
                    {error}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
            </form>
          </Card.Body>
        </Card>
        {/* <h4> User Logged In: </h4> */}
        {/* {user?.email} */}
      </div>
    </div>
  );
}
