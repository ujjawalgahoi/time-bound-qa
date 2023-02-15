import './App.css';
import Sidebar from './Sidebar/Sidebar';
import QuestionBoard from './QuestionBoard/QuestionBoard';

import { stages } from './config';
import { useState } from 'react';
import Timer from './Timer/TImer';


const getEmptyInputs = () => {
  return stages.map((val) => -2)
}

const sampleDataInput = () => {
  return stages.map((val) => val.correct)
}
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenOptions, setChosenOptions] = useState(getEmptyInputs())

  return (
    <div className="App">
      <Timer minutes={5} seconds={0}/>
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
      />
    </div>
  );
}

export default App;
