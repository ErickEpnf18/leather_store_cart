import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@mui/material";
// schema yup
const schema = yup
  .object({
    name: yup.string().required("Campo incorrecto"),
    price: yup
      .number()
      .typeError("Especifique un número")
      .min(0, "Mínimo valor $0.")
      .max(1000, "Valor máximo de $1000."),
    discount: yup
      .number()
      .typeError("Especifique la ciudad")
      .min(0, "Mínimo valor $0.")
      .max(1000, "Valor máximo de $1000."),
    stock: yup
      .number()
      .typeError("Especifique su dirección")
      .min(0, "Mínimo valor $0.")
      .max(10000, "Valor máximo de $10000."),
    size: yup
      .number()
      .typeError("Especifique un número")
      .min(0, "Mínimo valor $0.")
      .max(1000, "Valor máximo de $100."),
  })
  .required();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog({
  open,
  handlerOpen,
}) {
  // const [open, setOpen] = React.useState(false);
  // const [userInfo, setUserInfo] = React.useState({
  //   name: data.name,
  //   price: data.price,
  //   discount: data.discount,
  //   stock: data.stock,
  //   size: data.size,
  // });
    const [userInfo, setUserInfo] = React.useState({
    name: "",
    price: "",
    discount: "",
    stock: "",
    size: "",
  });
  // console.log("why data:", data);
  // debugger;

  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   console.log("rows dialogn", data);
  //   console.log("e", e.target);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const obj = { ...data, ...{ index: index } };
    handlerUpdate(obj);
    handlerOpen(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log("e", e);
  };
  return (
    <Dialog
      open={open}
      onClose={() => handlerOpen(false)}
      TransitionComponent={Transition}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Generar Factura</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para {userInfo.name !== " "? "generar una factura ": "realizar una actualización"} empieza llenando los campos de
            abajo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={`Nombres completos ${userInfo.name}`}
            type="text"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { name: target.value })
            }
            {...register("name")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.name?.message}
          </Typography>
          <TextField
            margin="dense"
            id="price"
            label={`Numero de Cedula${userInfo.price}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { price: target.value })
            }
            {...register("price")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.price?.message}
          </Typography>
          <TextField
            margin="dense"
            id="discount"
            label={`Ciudad${userInfo.discount}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { discount: target.value })
            }
            {...register("discount")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.discount?.message}
          </Typography>
          <TextField
            margin="dense"
            id="stock"
            label={` Dirección de domicilio${userInfo.stock}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}

            onChange={({ target }) =>
              setUserInfo(...userInfo, { stock: target.value })
            }
            {...register("stock")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.stock?.message}
          </Typography>
          <TextField
            margin="dense"
            id="size"
            label={`Numero de celular ${userInfo.size}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { size: target.value })
            }
            {...register("size")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.size?.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handlerOpen(false)}>Cancel</Button>
          <Button type="submit">Generar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
