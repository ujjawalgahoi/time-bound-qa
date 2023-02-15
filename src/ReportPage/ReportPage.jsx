import React from "react";
import styles from "./ReportPage.module.scss";

function ReportPage(props) {
  const totalAsked = () => {
    return props.stages.length;
  };

  const totalCorrect = () => {
    return props.stages.filter((stage, index) => {
      return stage.correct === props.chosenOptions[index];
    }).length;
  };

  const scoreCalculate = () => {
    return props.stages
      .map((stage, index) => {
        if (props.chosenOptions[index] > -1) {
          if (props.chosenOptions[index] === stage.correct) {
            return stage.marks;
          } else {
            return stage.neg_marks;
          }
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b);
  };

  return (
    <div className={styles["report-page"]}>
      <div className={styles["detail-block"]}>
        <div className={styles["detail-title"]}>Questions Asked:</div>
        <div className={styles["detail-value"]}>{totalAsked()}</div>
        <div className={styles["detail-title"]}>Questions Correct:</div>
        <div className={styles["detail-value"]}>{totalCorrect()}</div>
        <div className={styles["detail-title"]}>Questions Asked:</div>
        <div className={styles["detail-value"]}>{scoreCalculate()}</div>
      </div>
    </div>
  );
}

export default ReportPage;
