import axios from "axios";
const params = {
  default: "/api/algo/algo/",
  profile: "/api/algo/algo/",
  one_profile: "/api/algo/algo/",
  product: "/api/algo/algo/",
  one_product: "/api/algo/algo/",
  client: "/api/algo/algo/",
  one_client: "/api/algo/algo/",
}
const url = "https://pokeapi.co/api/v2/pokemon/ditto" + params.default;


///////////////MYPROFILE///////////
export async function myProfile(index) {
  const listProducts = listProduct();
  return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }
  export async function updateProfile(index) {
  const url_ = url + params.profile;
  const listProducts = listProduct();
  return await axios.get(url)
      .then((res) => res)
      .catch((er) =>er);
  }
  

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

  


