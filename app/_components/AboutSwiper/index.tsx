import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./index.module.scss";

const images = [
  "/slide-development-1.png",
  "/slide-development-2.png",
  "/slide-development-3.png",
  "/slide-development-4.png",
];

export default function AboutSwiper() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1.3}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
        },
      }}
      centeredSlides={true}
      navigation
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={index} className={styles.slide}>
            {({ isActive }) => (
              <div className={styles.slideWrapper}>
                <Image
                  src={src}
                  width={400}
                  height={400}
                  alt=""
                  className={`${styles.slideImage} ${
                    isActive ? styles.active : styles.notActive
                  }`}
                />
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
