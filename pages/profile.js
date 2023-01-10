import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fab, Grid, IconButton } from "@mui/material";
import style from "./styles/Profile.module.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from "firebase-config";
import { useRouter } from "next/router";
import { getItems, getItemsByConditionAll } from "../service/api";
import Drawer from "components/drawer";

const Profile = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const [wishes, setWishes] = useState(null);
  const [karts, setKarts] = useState(null);
  const router = useRouter();

  const doStuff = async () => {
    let email = "";
    await onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        email = currentUser.email;
      }
    });
    const allItems = await getItemsByConditionAll("users");
    const itemFiltered = allItems.filter((i) => i.email === email);
    setUser(itemFiltered);
  };
  useEffect(() => {
    doStuff();
  }, []);
  const handleWishes = async () => {
    setOpenDrawer(true)
    const allItems = await getItemsByConditionAll("wishes");
    const em = user[0].email;
    const itemFiltered = allItems.filter((i) => i.id === em);
    if (itemFiltered) setWishes(itemFiltered);
  };
  const handleKart = async () => {
    setOpenDrawer(true)
    const allItems = await getItemsByConditionAll("karts");
    const em = user[0].email;
    const itemFiltered = allItems.filter((i) => i.id === em);
    if (itemFiltered) setKarts(itemFiltered);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
    console.log("main drawer", newOpen);
  };

  return (
    <Grid className={style.container}>
      <Card sx={{ maxWidth: 345 }}>
        <div className={style.container}></div>
        {user ? (
          user.map((i, index) => (
            <div key={index}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <AccessibilityIcon fontSize="large" color="primary" />
                  {i.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Username: {i.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Correo electronico: {i.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contraseña: {i.password}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={handleWishes}>
                  <Fab aria-label="like" color="primary">
                    <FavoriteIcon />
                  </Fab>
                </IconButton>
                <IconButton onClick={handleKart}>
                  <Fab aria-label="like" color="primary">
                    <ShoppingCartIcon />
                  </Fab>
                </IconButton>
              </CardActions>
              <Drawer toggleDrawer={toggleDrawer} open={openDrawer} />
            </div>
          ))
        ) : (
          <></>
        )}
      </Card>
    </Grid>
  );
};

export default Profile;
