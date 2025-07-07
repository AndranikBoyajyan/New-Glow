import AllTreatmentsContentWraper from "../../components/AllTreatmentsContentWraper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";
import TreatmentPageCard from "../../entities/TreatmentPageCard";

export const AllTreatments = () => {
  return (
    <div className={styles.all_Tratments_page}>
      <AllTreatmentsTitleBlock />
      <TreatmentPageCard
        name="Microneedling Face"
        description="Microneedling, also known as collagen induction therapy, can improve the appearance and texture of your skin by stimulating your body to produce collagen. The procedure involves delivering sterile needles vertically into the skin to create micro-wounds, which trigger the body's natural healing response. The skin reacts by producing more collagen and elastin to close the wounds."
        duration="1 Hr"
        price="$295"
        imgUrl="./pngs/MicroneedingFace.png"
      />
      <AllTreatmentsContentWraper />
    </div>
  );
};
