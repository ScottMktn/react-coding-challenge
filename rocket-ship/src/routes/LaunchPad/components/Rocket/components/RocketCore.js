import React from 'react';
import '../styles/_rocket.scss';

const SECONDS_TO_TAKEOFF = 5;
const MS_TO_TAKEOFF = SECONDS_TO_TAKEOFF * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

/**
 * Explanation: 
 * I removed the if statement in the timeToPositionPercent function as we do not want to lift off
 * the rocket. As such, we always return the final position bottom value. We do however, want to 
 * keep the animations ongoing for the rocket. 
 */
function timeToPositionPercent(startTime) {
  const now = Date.now();
  const timeDiff = now - startTime;
  return FINAL_POSITION_BOTTOM_VAL;
}

function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map(() => <li />);
}

export default function RocketCore({ initialLaunchTime }) {
  return (
    <>
      <div className="rocket" style={{ bottom: timeToPositionPercent(initialLaunchTime) }}>
        <div className="rocket__body">
          <div className="rocket__body__main"/>
          <div className="rocket__body__fin rocket__body__fin__left"/>
          <div className="rocket__body__fin rocket__body__fin__right"/>
          <div className="rocket__body__window"/>
        </div>
        <div className="rocket__exhaust__flame"/>
        <ul className="rocket__exhaust__fumes">
          {generateEmptyListEls(9)}
        </ul>
      </div>
      <ul className="stars">
        {generateEmptyListEls(7)}
      </ul>
    </>
  );
}
