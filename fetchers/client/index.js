import axios from "axios";
const params = {
    default: "/api/algo/algo/",
    profile: "/api/algo/algo/",
    one_profile: "/api/algo/algo/",
    kart: "/api/algo/algo/",
    one_kart: "/api/algo/algo/",
    billing: "/api/algo/algo/",
    one_billing: "/api/algo/algo/",
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
const listProducts = listProduct();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}



///////////////KART///////////
export async function listKart() {
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
export async function deleteItem(index) {
const listClients = listClients();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
export async function addItem(index) {
const listClients = listClients();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
export async function updateItem(index) {
const listClients = listClients();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}

///////////////MIS COMPRAS///////////
export async function listBuyings(index) {
const listProducts = listProduct();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
export async function deleteBuyings(index) {
const listProducts = listProduct();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}


///////////////MYBILLINGS///////////
export async function listBillings() {
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
export async function deleteBilling(index) {
const listEmployees = listEmployees();
return await axios.get(url)
    .then((res) => res)
    .catch((er) =>er);
}
