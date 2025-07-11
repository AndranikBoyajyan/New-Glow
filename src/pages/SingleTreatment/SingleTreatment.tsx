import { Navigate } from "react-router";

import { TREATMENTS } from "../../constants/treatments";
import useUrlParams from "../../hooks/useUrlParams";
import Microneedling from "../../components/TreatmentsContainers/Microneedling";
import ChemicalPeels from "../../components/TreatmentsContainers/ChemicalPeels";
import styles from "./SingleTreatment.module.css";
import LaserHairRemoval from "../../components/TreatmentsContainers/LaserHairRemoval";

export const SingleTreatment = () => {
  const treatmentsTrueNames = TREATMENTS.map((treatment) =>
    treatment.name.replaceAll(" ", "-").toLowerCase()
  );

  const { name } = useUrlParams();

  if (name && !treatmentsTrueNames.includes(name))
    return <Navigate to={`/pageNotFound`} />;
  if (name === "microneedling") return <Microneedling />;
  if (name === "chemical-peels") return <ChemicalPeels />;
  if (name === "laser-hair-removal") return <LaserHairRemoval />;

  return <div className={styles.singleTreatment}>{name}</div>;
};
