import TreatmentMenuItem from "../../entities/TreatmentMenuItem";
import cn from "classnames";

import styles from "./Treatments.module.css";
import { TREATMENTS } from "../../constants/treatments";
import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";

export const Treatments = () => {
  const params = useParams();
  const [redirectName, setRedirectName] = useState(params.name ?? "");

  const navigate = useNavigate();

  const handleNavigate = (name: string) => {
    const urlParamsName = name.replaceAll(" ", "-").toLowerCase();

    setRedirectName(urlParamsName);

    navigate(`/${urlParamsName}`);
    if (redirectName === params.name) {
      navigate(`/${urlParamsName}`, { replace: true });
    }
  };

  return (
    <div className={styles.treatments} role="menuitem">
      {TREATMENTS.map((treatment) => (
        <TreatmentMenuItem
          key={treatment.id}
          name={treatment.name}
          handleClick={handleNavigate}
        />
      ))}
      <Link
        to="/all-treatments"
        className={cn(styles.seeAll, "poppins-medium-italic")}
        style={{ textDecoration: "none" }}
      >
        See All
      </Link>
    </div>
  );
};
