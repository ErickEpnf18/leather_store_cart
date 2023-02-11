import axios from "axios";
const params = {
  default: "/api/algo/algo/",
  product: "/api/algo/algo/",
  one_product: "/api/algo/algo/",
  client: "/api/algo/algo/",
  one_client: "/api/algo/algo/",
  employee: "/api/algo/algo/",
  one_employee: "/api/algo/algo/",
  companie: "/api/algo/algo/",
  one_companie: "/api/algo/algo/",
}
const url = "https://pokeapi.co/api/v2/pokemon/ditto" + params.default;

  ///////////////PRODUCTS///////////
  export async function listProduct() {
    return new Promise(async (resolve, reject) => {
        await axios
          .get(url)
          .then((res) => {
            resolve(res);
          })
          .catch((er) => {
            reject(er);
          });
      });
  }
  export async function deleteProduct(index) {
    const listProducts = listProduct();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
  }
  export async function addProduct(index) {
    const listProducts = listProduct();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
  }
  export async function updateProduct(index) {
    const listProducts = listProduct();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
  }

  ///////////////CLIENTS///////////
  export async function listClients() {
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }
  export async function deleteClient(index) {
    const listClients = listClients();
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }
  export async function addClient(index) {
    const listClients = listClients();
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }
  export async function updateClient(index) {
    const listClients = listClients();
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }

  ///////////////EMPLOYEES///////////
  export async function listEmployees() {
    return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }
  export async function deleteEmployee(index) {
    const listEmployees = listEmployees();
    return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }
  export async function addEmployee(index) {
    const listEmployees = listEmployees();
    return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }
  export async function updateEmployee(index) {
    const listEmployees = listEmployees();
    return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }

    
///////////////MYCOMPANIES///////////
export async function listCompanies() {
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
}
export async function deleteCompanie(index) {
    const listClients = listClients();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
}
export async function addCompanie(index) {
    const listClients = listClients();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
}
export async function updateCompanie(index) {
    const listClients = listClients();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
}

