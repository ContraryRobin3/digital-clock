import React from "react";

function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  function getCurrentTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(getCurrentTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
