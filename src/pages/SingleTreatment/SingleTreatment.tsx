import { Navigate, useParams } from "react-router";

import { TREATMENTS } from "../../constants/treatments";
import Microneedling from "../../components/TreatmentsContainers/Microneedling";
import ChemicalPeels from "../../components/TreatmentsContainers/ChemicalPeels";
import styles from "./SingleTreatment.module.css";
import LaserHairRemoval from "../../components/TreatmentsContainers/LaserHairRemoval";
import Facials from "../../components/TreatmentsContainers/Facials";
import Morpheus8 from "../../components/TreatmentsContainers/Morpheus-8";
import FatDissolving from "../../components/TreatmentsContainers/FatDissolving";
import FacialContouring from "../../components/TreatmentsContainers/FacialContouring";

export const SingleTreatment = () => {
  const treatmentsTrueNames = TREATMENTS.map((treatment) =>
    treatment.name.replaceAll(" ", "-").toLowerCase()
  );

  const { name } = useParams();

  if (name && !treatmentsTrueNames.includes(name))
    return <Navigate to={`/pageNotFound`} />;
  if (name === "microneedling") return <Microneedling />;
  if (name === "chemical-peels") return <ChemicalPeels />;
  if (name === "laser-hair-removal") return <LaserHairRemoval />;
  if (name === "facials") return <Facials />;
  if (name === "morpheus-8") return <Morpheus8 />;
  if (name === "fat-dissolving") return <FatDissolving />;
  if (name === "facial-contouring") return <FacialContouring />;

  return <div className={styles.singleTreatment}>{name}</div>;
};
