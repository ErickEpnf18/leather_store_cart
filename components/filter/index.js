import React, { useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from './Filter.module.css';
import { Divider } from "@mui/material";
const Filter = () => {
  const [value, setValue] = useState("");
  const ref = useRef();

  return (
    <div className={styles.container_general}>
        <Divider/>
        <div className={styles.container}>
      <span>FILTROS: </span>
      <div className={styles.filter_container}>
        <Dropdown>
          <Dropdown.Toggle size="sm"id="dropdown-custom-components" variant="secondary">
            COLOR
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item eventKey="1">Negro</Dropdown.Item>
            <Dropdown.Item eventKey="2">Azul</Dropdown.Item>
            <Dropdown.Item eventKey="3">Blanco</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="1" active>
              Todo
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle size="sm"id="dropdown-custom-components" variant="secondary">
            TAMAÑO
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">XS</Dropdown.Item>
            <Dropdown.Item eventKey="2">S</Dropdown.Item>
            <Dropdown.Item eventKey="3">M</Dropdown.Item>
            <Dropdown.Item eventKey="4">XL</Dropdown.Item>
            <Dropdown.Item eventKey="5">XLL</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="1" active>
              Todo
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle size="sm"d="dropdown-custom-components" variant="secondary">
            RANGO DE PRECIO
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">$10.00 - $50.00</Dropdown.Item>
            <Dropdown.Item eventKey="2">$50.00 - $80.00</Dropdown.Item>
            <Dropdown.Item eventKey="3">$80.00 - $299.00</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="1" active>
              Todo
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
        </div>
      <Divider/>
      
    </div>
  );
};

export default Filter;
