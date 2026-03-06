import cn from "classnames";

import styles from "./RadianceBegin.module.css";
import CustomSwiper from "../../../features/CustomSwiper";
import FirstSlide from "../../../features/HomeSlider/FirstSlide";
import SecondSlide from "../../../features/HomeSlider/SecondSlide";

export const RadianceBegin = () => {
  return (
    <div className={cn(styles.fadeSlide)}>
      <CustomSwiper
        slides={[<FirstSlide key={1} />, <SecondSlide key={2} />]}
        bulletsClassName="bullets_radiance_begin"
        spaceBetween={-1}
      />
    </div>
  );
};
