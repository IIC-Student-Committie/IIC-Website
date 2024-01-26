import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CountdownTimer = () => {
  const targetDate = new Date("2024-02-02T12:00:00"); // February 2nd, 2024, 12:00 PM
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // The countdown has ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-3 mb-3">
          <div
            className="border p-3 text-center"
            style={{ borderRadius: "20px", height: "100%", width: "100%" }}
          >
            <div className="text-white" style={{fontWeight:"750",fontSize:"30px"}}>{timeRemaining.days}</div>
            <div className="text-white">Days</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div
            className="border p-3 text-center"
            style={{ borderRadius: "20px", height: "100%", width: "100%" }}
          >
            <div className="text-white" style={{fontWeight:"750",fontSize:"30px"}}>{timeRemaining.hours}</div>

            <div className="text-white">Hours</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div
            className="border p-3 text-center"
            style={{ borderRadius: "20px", height: "100%", width: "100%" }}
          >
            <div className="text-white" style={{fontWeight:"750",fontSize:"30px"}}>{timeRemaining.minutes}</div>

            <div className="text-white">Minutes</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div
            className="border p-3 text-center"
            style={{ borderRadius: "20px", height: "100%", width: "100%" }}
          >
            <div className="text-white" style={{fontWeight:"750",fontSize:"30px"}}>{timeRemaining.seconds}</div>

            <div className="text-white">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
