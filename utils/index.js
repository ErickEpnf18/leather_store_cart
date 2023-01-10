import { faker } from "@faker-js/faker";
export const capitalize = (s) =>
  s && (s[0].toUpperCase() + s.slice(1)).replaceAll("_", " ");
export const outputWithSpace = (e) => {
  return e
    .replace(/\w+/g, function (txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, "");
};
export const productInfo = {
  men: {
    coverImage: "/assets/jackOseaOprey.jpg",
    productTypes: {
      formal_shirts: {
        coverImage: "/assets/formal_shirts2.jpeg",
        filters: ["None", "Regular", "Slim", "Stretch"],
        searchPlaceholder: "Single Cuff",
      },
      sportswear: {
        coverImage: "/assets/sportswear2.jpeg",
        filters: ["None", "Trainers", "Joggers", "Shorts", "Hoodie"],
        searchPlaceholder: "Nike",
      },
      coats: {
        coverImage: "/assets/coats3.jpeg",
        filters: ["None", "Funnel", "Hooded", "Barbour", "Collar"],
        searchPlaceholder: "Bomber",
      },
    },
  },
  women: {
    coverImage: "/assets/jackOseaOprey.jpg",
    productTypes: {
      jeans: {
        coverImage: "/assets/jackOseaOprey.jpg",

        filters: ["None", "Skinny", "Slim", "Boot Cut", "Flare"],
        searchPlaceholder: "Skinny",
      },
      dresses: {
        coverImage: "/assets/dresses3.jpeg",
        filters: ["None", "Short", "Maxi", "Long", "Regular"],
        searchPlaceholder: "Long Sleeve",
      },
      makeup: {
        coverImage: "/assets/makeup2.jpeg",
        filters: ["None", "Mascara", "Lip Gloss", "Foundation", "Blush"],
        searchPlaceholder: "Brush Set",
      },
    },
  },
  home: {
    coverImage: "/assets/home.jpeg",
    productTypes: {
      beds: {
        coverImage: "/assets/beds.jpeg",
        filters: ["None", "Metal", "Ottoman", "Storage", "Wooden"],
        searchPlaceholder: "Upholstered",
      },
      office: {
        coverImage: "/assets/office.jpeg",
        filters: ["None", "Desk", "Chair", "Lamp", "Shelf"],
        searchPlaceholder: "Space Saving",
      },
      coffee_tables: {
        coverImage: "/assets/coffee_table.jpeg",
        filters: ["None", "Wood", "Glass", "Round", "Storage"],
        searchPlaceholder: "Oak Effect",
      },
    },
  },
};

export const productSpecs = {
  dimensions: {
    header: "Dimensions",
    options: [
      {
        label: "Height",
        value: "100cm",
      },
      {
        label: "Width",
        value: "130cm",
      },
      {
        label: "Depth",
        value: "150cm",
      },
    ],
  },
  shipping: {
    header: "Shipping",
    options: [
      {
        label: "UK",
        value: "£4.99",
      },
      {
        label: "USA",
        value: "£6.99",
      },
      {
        label: "Gloal",
        value: "£9.99",
      },
    ],
  },
  colors: {
    header: "Colors",
    noteColor: true,
    options: [
      {
        label: "Red",
        value: true,
      },
      {
        label: "Blue",
        value: false,
      },
      {
        label: "Brown",
        value: true,
      },
    ],
  },
  sizes: {
    header: "Sizes",
    wrapText: true,
    options: [
      {
        label: "Large",
        value: "Check size guide for details",
      },
      {
        label: "Width",
        value: "Check size guide for details",
      },
      {
        label: "Depth",
        value: "Check size guide for details",
      },
    ],
  },
};

export const randomCount = () => {
  const max = 273;
  const min = 23;
  return Math.floor(Math.random() * (max - min) + min).toFixed(0);
};

export const generateInvoice = (doc, cart, total) => {
  console.log("Array:", cart);
  debugger;
  const content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Una facturación creada por ErickEpnf18 and plantilla de facturación responsiva</title>

    <style>
      .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
      }

      .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
      }

      .invoice-box table td {
        padding: 5px;
        vertical-align: top;
      }

      .invoice-box table tr td:nth-child(2) {
        text-align: right;
      }

      .invoice-box table tr.top table td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
      }

      .invoice-box table tr.information table td {
        padding-bottom: 40px;
      }

      .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
      }

      .invoice-box table tr.details td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.item td {
        border-bottom: 1px solid #eee;
      }

      .invoice-box table tr.item.last td {
        border-bottom: none;
      }
      .invoice-box-div-right{
        display: flex;
        justifiy-content: right;
        align-items: right;
        text-align:right;
        text-align: right;
      }

      .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
      }
      .fullHeight{
      }

      @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
          width: 100%;
          display: flex;
          text-align: right;
          justify-content:right;
        }

        .invoice-box table tr.information table td {
          width: 100%;
          display: flex;
          text-align: rigth;
          justify-content:right;
        }
      }

      /** RTL **/
      .invoice-box.rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
      }

      .invoice-box.rtl table {
        text-align: right;
      }

      .invoice-box.rtl table tr td:nth-child(2) {
        text-align: left;
      }
    </style>
  </head>

  <body>
    <div class="invoice-box">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td colspan="2">
          <!-- <table>
          </table> -->
              <tr>
              <td class="title">
              <img src="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg" style="width: 100%; max-width: 300px" />
              </td>
              <td></td>
              <td class="fullHeight"></td>   
              <td>
              <div class="invoice-box-div-right">
              Factura #: 000123<br />
              Creado: ${new Date().toLocaleString()}<br />
              Debido: ${new Date().toLocaleString()}
              </div>
              </td>
              </tr>
              </td>
              </tr>
              
              <tr class="information">
              <td colspan="2">
              <!--<table>
              </table> -->
              <tr>
              <td>
              <span><strong>Datos del comprador</strong></span></br>
              ${doc.names}<br />
              ${doc.ci}<br />
                    ${doc.location}, ${doc.city} <br />
                </td>
                <td></td>
                <td></td>
                <td>
                <div class="invoice-box-div-right">
                  ${faker.company.companyName()}<br />
                  ${doc.names}<br />
                  ${faker.internet.email()}
                  </div>
                </td>
              </tr>
          </td>
        </tr>
</table>
<table>
        <tr class="heading">
          <td>Metodo de Pago</td>
            <td> </td>
            <td> </td>
            <td> Valor$</td>
        </tr>

        <tr class="details">
          <td>Efectivo</td>
          <td></td>
          <td></td>
          <td>1000</td>
        </tr>

        <tr class="heading">
          <td>Producto</td>
          <td>Tamaño</td>
          <td>Descuento</td>
          <td>Precio4</td>
        </tr>

        ${cart.map((i) => {
          return `
          <tr class="item">
          <td>
          <!-- <img src=${i.image} style="width: 100%; max-width: 20px" /> 
          -->
          &bscr;
            ${i.name}
          </td>
          <td>${i.size}</td>
          <td>${i.discount}</td>
          <td>$${i.price}</td>
            </tr>
            `;
        })}
<tr class="total">
          <td></td>
          <td></td>
          <td><strong>Total:</strong> $${total}</td></tr>
      </table>
    </div>
  </body>
</html>`;
  // generatePrintableVoucher(cart, total);
  var winPrint = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0"
  );
  winPrint?.document.write(content);
  winPrint?.document.close();
  winPrint?.focus();
  winPrint?.print();
  winPrint.setTimeout(() => {
    if (winPrint) winPrint.close();
    // objet is eliminate
    // console.log("what:")
  }, 10000);
  // console.log("Now: ",winPrint)
};
