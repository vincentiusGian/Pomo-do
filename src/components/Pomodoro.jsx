import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";

const Pomodoro = () => {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());

  const handleRestart = () => {
    setTime(1500);
    setIsActive(false); // Pause the timer briefly to reset
    setStartTime(Date.now()); // Update the startTime to the current time
    setIsActive(true);  // Restart the timer
  };

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTime = 1500 - elapsedTime;

        if (newTime <= 0) {
          clearInterval(timer);
          setTime(0);
          setIsActive(false);
        } else {
          setTime(newTime);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, startTime]);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral-800 rounded-box text-neutral-content">
          <h1 className="text-8xl">
            {`${Math.floor(time / 60)}`.padStart(2, 0)}
          </h1>
          minutes
        </div>
        <div className="flex flex-col p-2 bg-neutral-800 rounded-box text-neutral-content">
          <h1 className="text-8xl">{`${time % 60}`.padStart(2, 0)}</h1>
          seconds
        </div>
      </div>
      <button 
        onClick={handleRestart} 
        className="mt-5 p-2 btn btn-circle rounded-full">
        <TfiReload />
      </button>
    </>
  );
};

export default Pomodoro;
