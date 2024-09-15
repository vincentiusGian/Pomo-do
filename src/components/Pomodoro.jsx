import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";

const Pomodoro = () => {
  const [time, setTime] = useState(1500); // 25 menit dalam detik
  const [isActive, setIsActive] = useState(false); // Status aktif/tidak
  const [pausedTime, setPausedTime] = useState(1500); // Menyimpan waktu saat dihentikan
  const [startTime, setStartTime] = useState(null); // Waktu awal mulai

  const handleRestart = () => {
    setTime(1500);
    setPausedTime(1500); // Reset juga waktu yang tersimpan
    setIsActive(false); // Hentikan sementara
  };

  const handleStart = () => {
    if (!isActive) {
      // Setel ulang startTime hanya jika timer tidak aktif
      setStartTime(Date.now());
      setIsActive(true);
    }
  };

  const handleStop = () => {
    setPausedTime(time); // Simpan waktu tersisa
    setIsActive(false); // Hentikan timer
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTime = pausedTime - elapsedTime;

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
  }, [isActive, startTime, pausedTime]);

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
      <div className="mt-5 flex space-x-4">
        <button 
          onClick={handleStart} 
          className="p-2 btn rounded-full">
          Start
        </button>
        <button 
          onClick={handleStop} 
          className="p-2 btn btn-error text-neutral-content rounded-full">
          Stop
        </button>
        <button 
          onClick={handleRestart} 
          className="p-2 btn btn-circle rounded-full">
          <TfiReload />
        </button>
      </div>
    </>
  );
};

export default Pomodoro;
