import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import cn from "classnames";
import { useEffect, useRef, useState, type FC, type JSX } from "react";

import Button from "../../shared/Button";
import { SliderArrows } from "../../shared/SliderArrows/SliderArrows";
import styles from "./CustomSwiper.module.css";

interface CustomSwiperProps {
  slides: (string | JSX.Element)[];
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  className?: string;
  bulletsClassName?: string;
  isArrow?: boolean;
}

export const CustomSwiper: FC<CustomSwiperProps> = ({
  slides,
  spaceBetween,
  slidesPerView,
  navigation,
  breakpoints,
  className,
  bulletsClassName,
  isArrow,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSwipe = (increment?: boolean) => {
    if (increment) {
      setCurrentSlide((prev) => prev + 1);
    } else setCurrentSlide((prev) => prev - 1);
  };

  const handleChangeSlide = (idx: number | undefined) => {
    setCurrentSlide(idx ?? 0);
    swiperRef.current?.slideTo(idx ?? 0);
  };

  useEffect(() => {
    swiperRef.current?.slideTo(currentSlide);
  }, [currentSlide]);

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={spaceBetween ?? 10}
        slidesPerView={slidesPerView ?? 1}
        navigation={navigation ?? false}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        breakpoints={
          breakpoints ?? {
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }
        }
        className={cn(styles.swiper, className)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx + 1}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {isArrow ? (
        <SliderArrows
          slides={slides}
          currentSlide={currentSlide}
          handleSwipe={handleSwipe}
        />
      ) : (
        <div className={cn(styles.bullets, styles[bulletsClassName ?? ""])}>
          {slides.map((_, index) => (
            <Button
              key={index + currentSlide}
              content=""
              className="slider_button"
              slideIndex={index}
              isActive={currentSlide === index}
              handleClick={handleChangeSlide}
            />
          ))}
        </div>
      )}
    </div>
  );
};
