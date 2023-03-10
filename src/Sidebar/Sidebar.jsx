import React from "react";
import styles from "./Sidebar.module.scss";

function Sidebar(props) {
  return (
    <div className={styles["side-bar"]}>
      {props.chosenOptions &&
        props.chosenOptions.map((option, index) => {
          if (option === -2)
            return <div className={styles["empty-option"]}>{index + 1}.</div>;
          if (option === -1) {
            return (
              <div
                className={styles["not-chosen"]}
              >
                {index + 1}. No Option Chosen
              </div>
            );
          } else {
            return (
              <div
                className={styles["option"]}
              >
                {index + 1}. {props.stages[index].options[option]}
              </div>
            );
          }
        })}
    </div>
  );
}

export default Sidebar;
