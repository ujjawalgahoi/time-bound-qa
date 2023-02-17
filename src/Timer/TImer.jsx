import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

function Timer(props) { 
  // useEffect(() => {
  //   if (props.totalTime > 0) {
  //     setTimeout(() => {
  //       props.setTotalTime(props.totalTime - 1);
  //     }, 1000);
  //   } else {
  //     props.setIsCompleted(true);
  //   }
  // }, [props.totalTime]);

  const zeroPad = (num) => String(num).padStart(2, "0");

  return (
    <div className={styles["timer"]}>
      {`${zeroPad(Math.floor(props.totalTime / 60))}:${zeroPad(props.totalTime % 60)}`}
    </div>
  );
}

export default Timer;
