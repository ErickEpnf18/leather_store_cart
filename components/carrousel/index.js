import { Carousel } from "react-bootstrap";

import image1 from "imgs/jacket.jpeg";
import image2 from "imgs/jacketIcon.jpg";
import image3 from "imgs/jacket.jpeg";
import Image from "next/image";
const image11 =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/148271.jpg";
const image22 =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/280061.jpg";
const image33 =
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/L26457.jpg?X56";

import styles from "./Carrousel.module.css";
import Link from "next/link";
const CarouselContainer = () => {
  return (
    <Carousel fade className={styles.container}>
        <Carousel.Item>
        <>
      <Link
        href={{
          pathname: "/categories",
          query: { type: "coats", gender: "men" },
        }}
      >
          <div className={styles.containerImage}>
            <Image
              className="d-block w-100"
              src={image11}
              width={300}
              height={300}
              alt="First slide"
            />
          </div>
      </Link>
          <Carousel.Caption>
            <h3>Abrigos</h3>
            <p>Modelos unicos y de moda.</p>
          </Carousel.Caption>
        </>
        </Carousel.Item>

      <Carousel.Item>
      <Link
        href={{
          pathname: "/categories",
          query: { type: "dresses", gender: "men" },
        }}
      >
        <div className={styles.containerImage}>
          <Image
            className="d-block w-100 mx-auto"
            src={image22}
            width={300}
            height={300}
            alt="Second slide"
          />
        </div>
</Link>
        <Carousel.Caption>
          <h3>Ropa Deportiva</h3>
          <p>Tendencia a la moda y juvenil</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link
        href={{
          pathname: "/categories",
          query: { type: "makeup", gender: "women" },
        }}
      >
        <div className={styles.containerImage}>
          <Image
            className="d-block w-100"
            src={image33}
            width={300}
            height={300}
            alt="Third slide"
          />
        </div>
        </Link>

        <Carousel.Caption>
          <h3>Maquillaje</h3>
          <p>Sientete una estrella</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
