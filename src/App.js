import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TaskResult from './components/TaskResult';
import Header from './components/Header';
import NameInput from './components/NameInput';
import Round1 from './components/Round1';
import Round2 from './components/Round2';
import Round3 from './components/Round3';
import BonusRound from './components/BonusRound';
import ScoreReward from './components/ScoreReward';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [name, setName] = useState(localStorage.getItem('userName') || '');

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    localStorage.setItem('selectedTask', task);
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/gameReact" element={<NameInput setName={setName} />} />
        <Route path="/gameReact/home" element={<Home name={name} />} />
        <Route path="/gameReact/round1" element={<Round1 name={name} />} />
        <Route path="/gameReact/round2" element={<Round2 name={name}></Round2>} />
        <Route path="/gameReact/round3" element={<Round3 name={name}></Round3>} />
        <Route path="/gameReact/bonusround" element={<BonusRound></BonusRound>} />
        <Route path="/gameReact/end" element={<ScoreReward></ScoreReward>} />
        <Route path="/gameReact/result" element={<TaskResult selectedTask={selectedTask} />} />
      </Routes>
    </div>
  );
};

export default App;