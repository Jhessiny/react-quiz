import React from "react";
import Timer from "react-compound-timer";

const MyTimer = () => {
  const { Minutes, Seconds } = Timer;

  return (
    <div className="myTimer">
      <Timer initialTime={300000} direction="backward">
        {() => (
          <React.Fragment>
            <Minutes />:
            <Seconds />
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};

export default MyTimer;
