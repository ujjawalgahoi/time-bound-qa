import React, { useEffect, useState } from "react";
import styles from "./QuestionBoard.module.scss";

function QuestionBoard(props) {
  document.title = `${props.currentIndex + 1}. ${
    props.stages[props.currentIndex].question
  }`;

  const updateValues = () => {
    let tempOptions = props.chosenOptions;
    if (tempOptions[props.currentIndex] === -2)
      tempOptions[props.currentIndex] = -1;
    props.setChosenOptions([...tempOptions]);
    console.log({ ss: props.chosenOptions });
    document.title = `${props.currentIndex + 1}. ${
      props.stages[props.currentIndex].question
    }`;
  };

  const handlePreviousBtn = () => {
    updateValues();
    props.setCurrentIndex(props.currentIndex - 1);
  };

  const handleNextBtn = () => {
    updateValues();
    props.setCurrentIndex(props.currentIndex + 1);
  };

  const chooseOption = (newOption) => {
    let tempOptions = props.chosenOptions; //tempOptions = [1,2,3,4]
    tempOptions[props.currentIndex] = newOption;
    props.setChosenOptions([...tempOptions]);
  };

  return (
    <div className={styles["question-board"]}>
      <div className={styles["question"]}>
        {props.stages[props.currentIndex].question}
      </div>
      <div className={styles["option-container"]}>
        {props.stages[props.currentIndex].options.map((option, index) => {
          return (
            <div className={styles["option"]}>
              <input
                type={"checkbox"}
                className="option-checkbox"
                checked={props.chosenOptions[props.currentIndex] === index}
                onChange={() => {
                  chooseOption(index);
                }}
              />
              {index + 1}. {option}
            </div>
          );
        })}
      </div>
      <div className={styles["bottom-bar"]}>
        {props.currentIndex > 0 && (
          <button className={styles["prev"]} onClick={handlePreviousBtn}>
            Previous
          </button>
        )}
        {props.currentIndex < props.stages.length - 1 && (
          <button className={styles["next"]} onClick={handleNextBtn}>
            Next
          </button>
        )}
				{props.currentIndex === props.stages.length - 1 && (
          <button className={styles["submit"]} onClick={() => props.setIsCompleted(true)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionBoard;
