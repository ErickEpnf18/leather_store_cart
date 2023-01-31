import { useEffect, useState } from "react";
import NavBarAdmin from "components/navbarAdmin";
import style from "../Admin.module.css";
import BarChart from "components/metrics/BarChart";
import LineChart from "components/metrics/LineChart";
import PieChart from "components/metrics/PieChart";
import { UserData } from "components/metrics/data/Data";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Grid, MenuItem, Select, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Products vs Price",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
const labels = [
  "Abrigos y Chaquetas",
  "Camisas formales",
  "Ropa Deportiva",
  "Vestidos",
  "Jeans de Mujer",
  "Maquillaje",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      type: "line",
      label: "Camisas Formales",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      type: "line",
      label: "Vestidos",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,1)",
    },
  ],
};
export const data1 = {
  labels,
  datasets: [
    {
      fill: true,
      type: "line",
      label: "Camisas Formales",
      data: labels
        .splice(0, 3)
        .map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      type: "line",
      label: "Vestidos",
      data: labels
        .splice(0, 3)
        .map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,1)",
    },
  ],
};

function App(props) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [userData1, setUserData1] = useState({
    labels: UserData.splice(0, 4).map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [way, setWay] = useState("");

  const handleChange = (event) => {
    setWay(event.target.value);
  };

  return (
    <>
      <NavBarAdmin />

      <div style={{ width: "100%",textAlign: "center"}}>
      <Typography variant="h6" gutterBottom>
        Escoge un grafico
      </Typography>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={way}
        onChange={handleChange}
        label="Grafico"
      >
        <MenuItem value="">
          <em>Escoge un grafico</em>
        </MenuItem>
        <MenuItem value={"line"}>Lineal</MenuItem>
        <MenuItem value={"bar"}>Barras</MenuItem>
        <MenuItem value={"cube"}>Cuadricular</MenuItem>
        <MenuItem value={"circle"}>Redondo</MenuItem>
        <MenuItem value={"all"}>Todos</MenuItem>
      </Select>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} //for default is 12 but not working when you moved
          // columns
          columnSpacing={{ xs: 0, sm: 0, md: 5 }}
          rowSpacing={{ xs: 3, sm: 3, md: 0 }}
        >
          {way === "line" && (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Line options={options} data={data} />
            </Grid>
          )}

          {way === "bar" && (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <BarChart options={options} chartData={userData} />
            </Grid>
          )}

          {way === "cube" && (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <LineChart chartData={userData} options={options} />
            </Grid>
          )}

          {way === "circle" && (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <PieChart chartData={userData1} options={options} />
            </Grid>
          )}

          {way === "all" && (
            <>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Line options={options} data={data} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <BarChart options={options} chartData={userData} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <LineChart chartData={userData} options={options} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <PieChart chartData={userData1} options={options} />
              </Grid>
            </>
          )}
        </Grid>
        {/* <div style={{ width: 700 }}>
      <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    
    datasets: [
      
      {
        label: "first Label",
        backgroundColor: [
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        id: 1,
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: 'Second Slide',
        backgroundColor: [
          "#ecf0f1",
        ],
        borderColor: "black",
        borderWidth: 2,
        id: 1,
        data: [3, 2, 1],

      },
    ],
  }}
/>
      </div> */}
      </div>
    </>
  );
}

export default App;
