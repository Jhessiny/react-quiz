import React from "react";
import Timer from "react-compound-timer";

const MyTimer = () => {
  const { Minutes, Seconds } = Timer;

  return (
    <div className="myTimer">
      <Timer
        initialTime={300000}
        direction="backward"
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      >
        {() => (
          <>
            <Minutes />:
            <Seconds />
          </>
        )}
      </Timer>
    </div>
  );
};

export default MyTimer;
