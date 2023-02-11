import axios from "axios";
const params = {
  default: "/api/algo/algo/",
  billing: "/api/algo/algo/",
  one_billing: "/api/algo/algo/",
  seller: "/api/algo/algo/",
  one_seller: "/api/algo/algo/",
}
const url = "https://pokeapi.co/api/v2/pokemon/ditto" + params.default;

  ///////////////BILLINGS///////////

  export async function listBillings() {
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
  }
  export async function deleteBilling(index) {
    const listProducts = listProduct();
    return await axios.get(url)
        .then((res) => res)
        .catch((er) =>er);
  }

  ///////////////SELLERS///////////
  export async function listSellers() {
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }
  export async function deleteSeller(index) {
    const listClients = listClients();
    return await axios.get(url)
       .then((res) => res)
       .catch((er) =>er);
  }
  // export async function addSeller(index) {
  //   const listClients = listClients();
  //   return await axios.get(url)
  //      .then((res) => res)
  //      .catch((er) =>er);
  // }
  // export async function updateSeller(index) {
  //   const listClients = listClients();
  //   return await axios.get(url)
  //      .then((res) => res)
  //      .catch((er) =>er);
  // }
