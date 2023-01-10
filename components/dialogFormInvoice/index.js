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
import { generateInvoice } from "utils";
// schema yup
const schema = yup
  .object({
    names: yup.string().required("Campo incorrecto"),
    ci: yup
      .number()
      .typeError("Especifique un número")
      .min(1111111111, "Ejemplo de 1795285157.")
      .max(9999999999, "Ejemplo de 1795285157."),
    city: yup.string().required("Campo incorrecto"),
    location: yup.string().required("Campo incorrecto"),
    phone: yup
      .number()
      .typeError("Especifique un número")
      .min(1000000000, "Mínimo valor 1000000000.")
      .max(9999999999, "Valor máximo de 9999999999."),
  })
  .required();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog({ open, handlerOpen, data }) {
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
    ci: 17347502758,
    city: "",
    location: "",
    phone: 1912568293,
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

  const onSubmit = (dayta) => {
    let total = 0;
    
    data.forEach((item) => (total += (item.price - item.discount)));
    const obj = { ...dayta, ...{total: 12}};
    generateInvoice(obj, data, total)
    debugger;
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
            Para{" "}
            {userInfo.name !== " "
              ? "generar una factura "
              : "realizar una actualización"}{" "}
            empieza llenando los campos de abajo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={`Nombres completos ${userInfo.names}`}
            type="text"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { names: target.value })
            }
            {...register("names")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.names?.message}
          </Typography>
          <TextField
            margin="dense"
            id="price"
            label={`Numero de Cedula${userInfo.ci}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { ci: target.value })
            }
            {...register("ci")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.ci?.message}
          </Typography>
          <TextField
            margin="dense"
            id="size"
            label={`Numero de celular ${userInfo.city}`}
            type="text"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { city: target.value })
            }
            {...register("city")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.city?.message}
          </Typography>
          <TextField
            margin="dense"
            id="discount"
            label={`Ciudad${userInfo.location}`}
            type="location"
            fullWidth
            variant="standard"
            // value={data.size}
            onChange={({ target }) =>
              setUserInfo(...userInfo, { location: target.value })
            }
            {...register("location")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.location?.message}
          </Typography>
          <TextField
            margin="dense"
            id="stock"
            label={` Dirección de domicilio${userInfo.phone}`}
            type="number"
            fullWidth
            variant="standard"
            // value={data.size}

            onChange={({ target }) =>
              setUserInfo(...userInfo, { phone: target.value })
            }
            {...register("phone")}
          />
          <Typography
            variant="caption"
            style={{ color: "red" }}
            className="ms-2"
          >
            {errors.phone?.message}
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
