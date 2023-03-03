import axios from "axios";
const urlDefault = "https://localhost:44356/api/"
const params = {
  default: urlDefault,
  product: "Productos",
  product_delete: "/api/algo/algo/",
  client: "/api/algo/algo/",
  one_client: "/api/algo/algo/",
  employee: "/api/algo/algo/",
  one_employee: "/api/algo/algo/",
  companie: "/api/algo/algo/",
  one_companie: "/api/algo/algo/",
}


  ///////////////PRODUCTS///////////
  export async function listProducts() {
    const url = params.default + params.product
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
    const url = params.default + params.product
    return await axios.delete(url, { params: { id: index } })
        .then((res) => res)
        .catch((er) =>er);
  }
  export async function addProduct(obj) {
    const url = params.default + params.product
    return await axios.post(url, {...obj}, {
      'content-type': 'text/json' 
    });
  }
  export async function updateProduct(index, obj) {
    const url = params.default + params.product
    return await axios.put(url,
    // Add  data,
     {...obj},
     // params in the config 
    { params: { id: index }
  });
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

