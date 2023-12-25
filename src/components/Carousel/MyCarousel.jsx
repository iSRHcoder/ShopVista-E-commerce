import { Carousel } from "react-bootstrap";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel className={styles.Carousel}>
      <Carousel.Item className={styles.Image}>
        <img
          src="/Images&svg's/two-beautiful-women-shopping-town_1303-16426.avif"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className={styles.Image}>
        <img
          src="/Images&svg's/female-friends-out-shopping-together_53876-25041.avif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
