import TreatmentMenuItem from "../../entities/TreatmentMenuItem";
import cn from "classnames";

import styles from "./Treatments.module.css";
import { TREATMENTS } from "../../constants/treatments";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { getTreatmentPath } from "../../helpers/getTreatmentPath";

export const Treatments = () => {
  const params = useParams();
  const [redirectName, setRedirectName] = useState(params.name ?? "");

  const navigate = useNavigate();

  const handleNavigate = (name: string) => {
    if (name === "all-treatments") {
      navigate(`/all-treatments`);
      return;
    }

    const urlParamsName = getTreatmentPath(name);

    setRedirectName(urlParamsName);

    navigate(`/${urlParamsName}`);
    if (redirectName === params.name) {
      navigate(`/${urlParamsName}`, { replace: true });
    }
  };

  return (
    <div className={styles.treatments} role="menuitem">
      <button
        onMouseDown={() => {
          handleNavigate("all-treatments");
        }}
        className={cn(styles.seeAllButton)}
      >
        <span className={cn(styles.seeAllText, "poppins-semibold")}>
          See All
        </span>
      </button>
      {TREATMENTS.map((treatment) => (
        <TreatmentMenuItem
          key={treatment.id}
          name={treatment.name}
          handleClick={handleNavigate}
        />
      ))}
    </div>
  );
};
