import { useState, useEffect } from "react";
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock">
      <div className="clock--center__dot"></div>
      <div className="clock--hand__hours" style={{ transform: `rotateZ(${time.getHours() * 30}deg)` }} ></div>
      <div className="clock--hand__minutes" style={{ transform: `rotateZ(${time.getMinutes() * 6}deg)` }} ></div>
      <div className="clock--hand__seconds" style={{ transform: `rotateZ(${time.getSeconds() * 6}deg)` }} ></div>
    </div>
  );
};

export default Clock;