import { useEffect, useState } from "react";
import pombo from '../../assets/doodle-pigeon.png';

interface PomboProps {
  handleClick: () => void;
}

export function Pombo({ handleClick }: PomboProps) {
  const [position, setPosition] = useState({ x: (window.innerWidth / 2) - 120, y: (window.innerHeight / 2) - 120 });
  const [isFacingRight, setIsFacingRight] = useState(true);

  function getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const oldX = position.x;
      const newX = getRandom(0, window.innerWidth - 240);
      const newY = getRandom(0, window.innerHeight - 240);
      
      setIsFacingRight(newX >= oldX);
      setPosition({ x: newX, y: newY });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={pombo}
        alt="Pegue o pombo!"
        width={240}
        onClick={handleClick}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `scaleX(${isFacingRight ? 1 : -1})`,
          transition: 'left 1.1s ease-in-out, top 1.1s ease-in-out, transform .5s linear'
        }}
      />
    </>
  )
};