import * as ic  from '../icons';

export const sideBarItems = {
  client: {
    sideOne: [
      {
        name: "My Perfil",
        link: "administer/products",
        icon: ic.icon_client,
        index: "profile_client",
      },
      {
        name: "Carrito",
        link: "administer/clients",
        icon: ic.icon_karts,
        index: "profile_client",
      },
      {
        name: "Mis compras",
        link: "administer/clients",
        icon: ic.icon_karts,
        index: "profile_client",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
      },
      // {
      //   name: 'Correos',
      //   link: 'administer/emails',
      //   icon: ic.icon_emails,
      // },
      {
        name: "Salir",
        link: "administer/sellers",
        icon: ic.icon_remove_client,
      },
    ],
  },
  employee: {
    sideOne: [
      {
        name: "Mi Perfil",
        link: "administer/products",
        icon: ic.icon_employee,
        index: "profile_employee",
      },
      {
        name: "Productos",
        link: "administer/clients",
        icon: ic.icon_products,
        index: "products",
      },
      {
        name: "Clientes",
        link: "administer/clients",
        icon: ic.icon_clients,
        index: "clients",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
        index: "billings",
      },
      {
        name: "Ventas",
        link: "administer/sellers",
        icon: ic.icon_sellers,
        index: "sellers",
      },
      // {
      //   name: 'Correos',
      //   link: 'administer/emails',
      //   icon: ic.icon_emails,
      // },
      {
        name: "Salir",
        link: "administer/sellers",
        icon: ic.icon_remove_client,
        index: "exit_employee",
      },
    ],
  },
  admin: {
    sideOne: [
      {
        name: "Productos",
        link: "administer/products",
        icon: ic.icon_products,
        index: "products",
      },
      {
        name: "Clientes",
        link: "administer/clients",
        icon: ic.icon_clients,
        index: "clients",
      },
      {
        name: "Encargados",
        link: "administer/employees",
        icon: ic.icon_employees,
        index: "employees",
      },
      {
        name: 'Companias',
        link: 'administer/employees',
        icon: ic.icon_employees,
        index: "companies",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
        index: "billings",
      },
      {
        name: "Ventas",
        link: "administer/sellers",
        icon: ic.icon_sellers,
        index: "sellers",
      },
      // {
      //   name: 'Correos',
      //   link: 'administer/emails',
      //   icon: ic.icon_emails,
      // },
      {
        name: "Salir",
        link: "administer/sellers",
        icon: ic.icon_remove_client,
        index: "exit",
      },
    ],
  },
};
