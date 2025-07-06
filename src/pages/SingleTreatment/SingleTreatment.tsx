import { useParams, Navigate } from "react-router";
import Menu from "../../components/Menu";

import styles from "./SingleTreatment.module.css";
import { TREATMENTS } from "../../constants/treatments";

export const SingleTreatment = () => {
  const treatmentsTrueNames = TREATMENTS.map((treatment) =>
    treatment.name.replaceAll(" ", "-").toLowerCase()
  );

  const { name } = useParams();

  if (name && !treatmentsTrueNames.includes(name))
    return <Navigate to={`/pageNotFound`} />;

  return (
    <div className={styles.singleTreatment}>
      <Menu />
    </div>
  );
};
