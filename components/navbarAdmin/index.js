import { Box } from "@mui/material";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "bootstrap/js/src/collapse.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducers/authSlice'
const Dashboard = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/admin">
            <AdminPanelSettingsIcon fontSize="large" /> Administrador
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-end"
              style={{ maxHeight: "100px", flexGrow: "inherit" }}
              navbarScroll
            >
              <Box sx={{ display: { sm: "none !important", xs: "flex " } }}>
                <Nav.Link>
                  <MenuIcon fontSize="large" />
                </Nav.Link>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Link href="/admin/metrics" className="navbar-expand navbar-nav nav-link navbar-nav nav-link.active navbar-nav nav-link active">
                  Metricas
                </Link>
                <Link href="/"
                    id="id_admin_logout"
                    className="navbar-expand navbar-nav nav-link navbar-nav nav-link.active navbar-nav nav-link active"
                    onClick={() => {
                      signOut(auth)
                        .then(async () => {
                          console.log("Successful logout");
                          await axios.post("/api/auth/logout");
                          dispatch(logout(values));
                          router.push("/")
                        }).catch((error) => {
                          //console.error("An error happened");
                          router.push("/")
                        });
                    }}
                    >
                    Salir
                </Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Box>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Dashboard;
