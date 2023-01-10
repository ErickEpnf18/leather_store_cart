import Image from 'next/image';
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
 const Card = ({data, index, on_submit}) => {
  return (
        <Col className="col-4"> 
        <p>{data.title}</p>
        <Image src={data.image} alt={data.image} width={200} height={200}/>
        <p>{data.price}</p>
        <p>{data.discount}</p>
        <Button onClick={()=> on_submit({...data, id: index, cartQuantity: 0})}>Add item</Button>
        </Col>
  )
}
export default Card;