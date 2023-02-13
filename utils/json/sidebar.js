import * as ic  from '../icons';

export const sideBarItems = {
  client: {
    sideOne: [
      {
        name: "Mi Perfil",
        link: "administer/products",
        icon: ic.icon_client,
        index: "profile_client",
      },
      {
        name: "Carrito",
        link: "administer/clients",
        icon: ic.icon_karts,
        index: "kart_client",
      },
      {
        name: "Mis compras",
        link: "administer/clients",
        icon: ic.icon_confirm_pay,
        index: "my_buying_client",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
        index: "billings_client",
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
        index: "exit_client",
      },
    ],
  },
  employee: {
    sideOne: [
      {
        name: "Mi Perfil",
        link: "administer/products",
        icon: ic.icon_employee,
        index: "profile_emp",
      },
      {
        name: "Productos",
        link: "administer/clients",
        icon: ic.icon_products,
        index: "products_emp",
      },
      {
        name: "Clientes",
        link: "administer/clients",
        icon: ic.icon_clients,
        index: "clients_emp",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
        index: "billings_emp",
      },
      {
        name: "Ventas",
        link: "administer/sellers",
        icon: ic.icon_sellers,
        index: "sellers_emp",
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
        index: "exit_emp",
      },
    ],
  },
  admin: {
    sideOne: [
      {
        name: "Productos",
        link: "administer/products",
        icon: ic.icon_products,
        index: "products_adm",
      },
      {
        name: "Clientes",
        link: "administer/clients",
        icon: ic.icon_clients,
        index: "clients_adm",
      },
      {
        name: "Encargados",
        link: "administer/employees",
        icon: ic.icon_employees,
        index: "employees_adm",
      },
      {
        name: 'Companias',
        link: 'administer/employees',
        icon: ic.icon_companies,
        index: "companies_adm",
      },
    ],
    sideTwo: [
      {
        name: "Facturaciones",
        link: "administer/billings",
        icon: ic.icon_billings,
        index: "billings_adm",
      },
      {
        name: "Ventas",
        link: "administer/sellers",
        icon: ic.icon_sellers,
        index: "sellers_adm",
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
        index: "exit_adm",
      },
    ],
  },
};
