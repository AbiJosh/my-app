import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timer.css';

function CountdownTimer() {
  const navigate = useNavigate(); 
  const [time, setTime] = useState(2 * 60 * 60); // 2 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  };

  return (
    <div className="timer-page">
      <div className="top-buttons">
        <button onClick={() => navigate('/map')} className="top-button1"></button>
        <button onClick={() => navigate('/map')} className="top-button2"></button>
      </div>
      <h1 className="Font">YOUR WATCH HAS NOW BEGUN</h1>
      <div className="content">
        <p className="Font">{formatTime(time)}</p>
        <button onClick={() => navigate('/round-1', { state: { carriedTime: time } })} className="game">Start</button>
      </div>
    </div>
  );
}

export default CountdownTimer;
