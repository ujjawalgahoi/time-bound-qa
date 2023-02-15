/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import QuestionBoard from "./QuestionBoard/QuestionBoard";

import { stages, timer } from "./config";
import { useState } from "react";
import Timer from "./Timer/TImer";
import ReportPage from "./ReportPage/ReportPage";

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
          <Timer minutes={timer.minutes} seconds={timer.seconds} setIsCompleted={setIsCompleted} />
          <Sidebar
            chosenOptions={chosenOptions}
            setCurrentIndex={setCurrentIndex}
            stages={stages}
          />
          <QuestionBoard
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
