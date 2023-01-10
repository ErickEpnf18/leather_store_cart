import Link from "next/link";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import stylesProduct from "styles/Product.module.css";

const Cards = ({ i }) => {
  console.log("values", i);
  
  return (


    <>
      <Card.Header>LAPTOPS</Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src="https://img.directindustry.es/images_di/photo-g/61398-11149671.webp"
        />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Marca:</th>
              <td>{i.MARCA}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Modelo:</th>
              <td>{i.MODELO}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Serie:</th>
              <td>{i.SERIE}</td>
            </tr>
          </thead>
          <tbody>
            {i.FECHA_FABRICACION ? (
              <tr>
                <th>Año de fabricación: </th>
                <td>12/12/2021</td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Empresa:</th>
              <td>{i.A_EMPRESA}</td>
            </tr>
          </thead>
          <tbody>
            {i.ESTADO ? (
              <tr>
                <th>ESTADO: </th>
                <td>{i.ESTADO}</td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </Table>

        <Card.Title>Especificaciones</Card.Title>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              {i.NOMBRE_EQUIPO ? <th>NOMBRE DEL EQUIPO </th> : <></>}
              {i.CPU_TYPE ? <th>PROCESADOR </th> : <></>}
              {i.MEMORIA ? <th>Memoria </th> : <></>}
              {i.DISCO ? <th>Disco </th> : <></>}
              {i.OSNOMBRE ? <th>SO</th> : <></>}
              {i.DIMENSIONES ? <th>Dimensiones</th> : <></>}
              {i.LICENCIA_OFFICE ? <th>LICENCIA OFFICE</th> : <></>}
              {i.CUENTA_LICENCIA ? <th>CUENTA DE LICENCIA</th> : <></>}
              {/* length: 12 */}
              {Array.from([
                "Nombre del Equipo",
                "Procesador",
                "Memoria",
                "Disco",
                "SO",
                "Dimensiones",
                "Licencia Office",
                "Cuenta de Licencia",
              ]).map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {i.NOMBRE_EQUIPO ? <td>{i.NOMBRE_EQUIPO} </td> : <></>}
              {i.CPU_TYPE ? <td>{i.CPU_TYPE} </td> : <></>}
              {i.MEMORIA ? <td>{i.MEMORIA}gb </td> : <></>}
              {i.DISCO ? <td>{i.DISCO}gb </td> : <></>}
              {i.OSNOMBRE? <td>{i.OSNOMBRE} </td> : <></>}
              {i.DIMENSIONES? <td>{i.DIMENSIONES} </td> : <></>}
              {i.LICENCIA_OFFICE? <td>{i.LICENCIA_OFFICE} </td> : <></>}
              {i.CUENTA_LICENCIA? <td>{i.CUENTA_LICENCIA} </td> : <></>}
              {Array.from([
                "INP-HN-234R",
                "Inteli7",
                "16Gb",
                "500Gb",
                "Windows 10",
                "16.4",
                "2019",
                "neohyundai_user@hotmail.com",
              ]).map((i, index) => (
                <td key={index}>{i}</td>
              ))}
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Licencia Office:</th>
              <td>2019</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cuenta de Licencia:</th>
              <td>neohyundai@hyundai.com.ec</td>
            </tr>
          </tbody>
        </Table>

        {/* <Card.Title>Carlos Alberto Reza</Card.Title> */}

        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
              <th>NOMBRE DE USUARIO:</th>
              <td>{i.USERID}</td>
            </tr>
          </thead>
          {i.CARGO ?           <tbody>
            <tr>
              <th>Cargo:</th>
              <td>{i.CARGO}</td>
            </tr>
          </tbody>: <></>}
          
          {i.DEPARTAMENTO ?           <tbody>
            <tr>
              <th>DEPARTAMENTO</th>
              <td>{i.DEPARTAMENTO }</td>
            </tr>
          </tbody>: <></>}
          {i.UBICACION ?           <tbody>
            <tr>
              <th>UBICACIÓN</th>
              <td>{i.UBICACION}</td>
            </tr>
          </tbody>: <></>}
          {i.LASTDATE?           <tbody>
            <tr>
              <th>FECHA DE ENTREGA</th>
              <td>{i.LASTDATE}</td>
            </tr>
          </tbody>: <></>}
          {i.ACT?           <tbody>
            <tr>
              <th>VER ACTA DE ENTREGA</th>
              <td>{i.ACT}</td>
            </tr>
          </tbody>: <></>}


        </Table>
        <br />
      </Card.Body>
    </>
  );
};

export default Cards;
// {/* <Card.Body>
// <Card
//   className={stylesProduct.card}
//   border="secondary"
//   style={{ width: "18rem" }}
// >
//   <Card.Header></Card.Header>
//   <Card.Body>
//     <Card.Title>Router</Card.Title>
//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Marca:</th>
//           <td>Lenovo</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Modelo:</th>
//           <td>500max</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Serie:</th>
//           <td>21314897fldasd2</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Año de fabricación: </th>
//           <td>12/12/2021</td>
//         </tr>
//       </tbody>
//     </Table>
//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Empresa:</th>
//           <td>Hyundai</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Estado:</th>
//           <td>Renta</td>
//         </tr>
//       </tbody>
//     </Table>
//     {/* <Image
//       src="public/favicon.ico"
//       height="50"
//       width="50"
//       alt="images"
//     /> */}
//     <Card.Title>Especificaciones</Card.Title>
//     <p>Imagen</p>
//     <Table striped bordered hover responsive variant="dark">
//       <thead>
//         <tr>
//           {/* length: 12 */}
//           {Array.from([
//             "Nombre del Equipo",
//             "Procesador",
//             "Memoria",
//             "Disco",
//             "SO",
//             "Dimensiones",
//             "Licencia Office",
//             "Cuenta de Licencia",
//           ]).map((i, index) => (
//             <th key={index}>{i}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {Array.from([
//             "INP-HN-234R",
//             "Inteli7",
//             "16Gb",
//             "500Gb",
//             "Windows 10",
//             "16.4",
//             "2019",
//             "neohyundai_user@hotmail.com",
//           ]).map((i, index) => (
//             <td key={index}>{i}</td>
//           ))}
//         </tr>
//       </tbody>
//     </Table>
//     <Table striped bordered hover responsive variant="dark">
//       <thead>
//         <tr>
//           <th>Licencia Office:</th>
//           <td>2019</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Cuenta de Licencia:</th>
//           <td>neohyundai@hyundai.com.ec</td>
//         </tr>
//       </tbody>
//     </Table>

//     <Card.Title>Carlos Alberto Reza</Card.Title>

//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Cargo:</th>
//           <td>Coordinador de producto</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Departamento:</th>
//           <td>Repuestos</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Ubicación:</th>
//           <td>Quito | datacenter | Soraya Tarco</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Fecha de entrega: </th>
//           <td>12/12/2021</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Ver acta de entrega: </th>
//           <td>router.pdf</td>
//         </tr>
//       </thead>
//     </Table>
//   </Card.Body>
//   {  data.length !== 0 ?
//    data.map((i, index) => (
// <div key={index}>
// <Card.Header>NeoHyundai</Card.Header>
//   <Card.Body>
//     <Card.Title>Router</Card.Title>
//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Marca:</th>
//           <td>{i.MARCA}</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Modelo:</th>
//           <td>500max</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Serie:</th>
//           <td>21314897fldasd2</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Año de fabricación: </th>
//           <td>12/12/2021</td>
//         </tr>
//       </tbody>
//     </Table>
//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Empresa:</th>
//           <td>Hyundai</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Estado:</th>
//           <td>Renta</td>
//         </tr>
//       </tbody>
//     </Table>
//     {/* <Image
//       src="public/favicon.ico"
//       height="50"
//       width="50"
//       alt="images"
//     /> */}
//     <Card.Title>Especificaciones</Card.Title>
//     <p>Imagen</p>
//     <Table striped bordered hover responsive variant="dark">
//       <thead>
//         <tr>
//           {/* length: 12 */}
//           {Array.from([
//             "Nombre del Equipo",
//             "Procesador",
//             "Memoria",
//             "Disco",
//             "SO",
//             "Dimensiones",
//             "Licencia Office",
//             "Cuenta de Licencia",
//           ]).map((i, index) => (
//             <th key={index}>{i}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {Array.from([
//             "INP-HN-234R",
//             "Inteli7",
//             "16Gb",
//             "500Gb",
//             "Windows 10",
//             "16.4",
//             "2019",
//             "neohyundai_user@hotmail.com",
//           ]).map((i, index) => (
//             <td key={index}>{i}</td>
//           ))}
//         </tr>
//       </tbody>
//     </Table>
//     <Table striped bordered hover responsive variant="dark">
//       <thead>
//         <tr>
//           <th>Licencia Office:</th>
//           <td>2019</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Cuenta de Licencia:</th>
//           <td>neohyundai@hyundai.com.ec</td>
//         </tr>
//       </tbody>
//     </Table>

//     <Card.Title>Carlos Alberto Reza</Card.Title>

//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>Cargo:</th>
//           <td>Coordinador de producto</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Departamento:</th>
//           <td>Repuestos</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Ubicación:</th>
//           <td>Quito | datacenter | Soraya Tarco</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>Fecha de entrega: </th>
//           <td>12/12/2021</td>
//         </tr>
//       </tbody>
//       <thead>
//         <tr>
//           <th>Ver acta de entrega: </th>
//           <td>router.pdf</td>
//         </tr>
//       </thead>
//     </Table>
//   </Card.Body>
// </div>

// )): (<p>{"doesn't work"}</p>)
// }
// </Card>
// <br />
// </Card.Body> */}
