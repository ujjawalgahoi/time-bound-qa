/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import QuestionBoard from "./QuestionBoard/QuestionBoard";

import { stages, timer } from "./config";
import { useState } from "react";
import Timer from "./Timer/TImer";
import ReportPage from "./ReportPage/ReportPage";
import Title from "./Title/title";

const getEmptyInputs = () => {
  return stages.map((val) => -2);
};

const sampleDataInput = () => {
  return stages.map((val) => val.correct);
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenOptions, setChosenOptions] = useState(getEmptyInputs());
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalTime, setTotalTime] = useState(
    timer.minutes * 60 + timer.seconds
  );
  return (
    <div className="App">
      {isCompleted ? (
        <ReportPage
          stages={stages}
          chosenOptions={chosenOptions}
          currentIndex={currentIndex}
        />
      ) : (
        <>
          <Title/>
          <Timer totalTime={totalTime} setTotalTime={setTotalTime} setIsCompleted={setIsCompleted} />
          <Sidebar
            chosenOptions={chosenOptions}
            setCurrentIndex={setCurrentIndex}
            stages={stages}
          />
          <QuestionBoard
            totalTime={totalTime}
            setTotalTime={setTotalTime}
            chosenOptions={chosenOptions}
            setChosenOptions={setChosenOptions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            stages={stages}
            setIsCompleted={setIsCompleted}
          />
        </>
      )}
    </div>
  );
}

export default App;
