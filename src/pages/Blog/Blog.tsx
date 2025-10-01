import { BlogPageCards } from "../../components/BlogComponents/BlogPageCards/BlogPageCards";
import PatientsResults from "../../entities/SingleTreatmentPatientsResults";
import Title from "../../shared/Title";

import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.titleWrapper}>
        <Title text="BLOG" className="title_h1_86" isH1 />
      </div>
      <BlogPageCards />
      <PatientsResults firstName="Acne detox facial (1 course completed) " />
    </div>
  );
};
