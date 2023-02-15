import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

function Timer(props) {
  const [totalTime, setTotalTime] = useState(props.minutes*60 + props.seconds)
  useEffect(()=> {
    if(totalTime > 0) {
        setTimeout(() => {
            setTotalTime(totalTime - 1)
        }, 1000)
    }
  }, [totalTime])

  const zeroPad = (num) => String(num).padStart(2, '0')

  return (
    <div className={styles["timer"]}>
      {`${zeroPad(Math.floor(totalTime/60))}:${zeroPad(totalTime%60)}`}
    </div>
  );
}

export default Timer;
