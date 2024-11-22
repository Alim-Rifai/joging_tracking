import React, { useState } from "react";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Log from "./components/Log";
import "./styles/App.css";

function App() {
  const [logEntries, setLogEntries] = useState([]);

  const addLogEntry = (entry) => {
    setLogEntries([entry, ...logEntries]);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Tracker addLogEntry={addLogEntry} />
        <Log entries={logEntries} />
      </main>
    </div>
  );
}

export default App;
