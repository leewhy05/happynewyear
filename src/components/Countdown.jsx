import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

const Countdown = () => {
  const [countdown, setCountdown] = useState(10);
  const [year, setYear] = useState("THANK YOU 2023");
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          setYear("WELCOME TO 2024");
          setBackgroundColor('red');
          setShowLightning(true);
          clearInterval(timer);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
   <div className=''>
     <div className={`container text-center move ${showLightning ? 'lightning' : ''}`} style={{ backgroundColor }}>
      <Snowfall/>
      <h1 className="display-4">Countdown: {countdown}</h1>
      <h2 className="display-4">{year}</h2>
    </div>
   </div>
  );
};

export default Countdown;