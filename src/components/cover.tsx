"use client";
import { useEffect, useRef } from "react";
import { useState } from "react";

const DottedWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rows = 10;
  const cols = 50;
  const dotSpacing = 14;
  const dotRadius = 2;
  const waveSpeed = 0.5;
  const waveAmplitude = 16;
  const [dynamicCols, setDynamicCols] = useState(cols);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".container") as HTMLElement;
      if (container) {
        const width = container.offsetWidth;
        const newCols = Math.max(5, Math.floor((width / dotSpacing) * 1.8));
        setDynamicCols(newCols);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = dynamicCols * dotSpacing;
    canvas.height = rows * dotSpacing;

    let animationFrameId = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < dynamicCols; col++) {
          const x = col * dotSpacing + dotSpacing / 2;
          const baseY = row * dotSpacing + dotSpacing / 2;
          const offset =
            Math.sin(
              (col / dynamicCols) * Math.PI * 2 +
                time * 0.002 * waveSpeed +
                row * 0.5
            ) * waveAmplitude;
          const y = baseY + offset;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#666";
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dynamicCols]);
  useEffect(() => {}, []);
  return (
    <div className="container">
      <canvas ref={canvasRef} className="w-full h-24"></canvas>
    </div>
  );
};

const Ripple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dynamicCols, setDynamicCols] = useState(50);

  const rows = 30;
  const dotSpacing = 14;
  const dotRadius = 2;
  const waveAmplitude = 32;
  const waveSpeed = 0.25;

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".container") as HTMLElement;
      if (container) {
        const width = container.offsetWidth;
        const newCols = Math.max(5, Math.floor((width / dotSpacing) * 1.9));
        setDynamicCols(newCols);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dynamicCols * dotSpacing;
    canvas.height = rows * dotSpacing;

    const centerCol = dynamicCols / 2;
    const centerRow = rows / 2;

    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < dynamicCols; col++) {
          const x = col * dotSpacing + dotSpacing / 2;
          const baseY = row * dotSpacing + dotSpacing / 2;

          const distance = Math.hypot(col - centerCol, row - centerRow);
          const offset =
            Math.sin(time * 0.005 * waveSpeed - distance * 0.5) * waveAmplitude;

          const y = baseY + offset;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#666";
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dynamicCols]);

  return (
    <div className="container">
      <canvas ref={canvasRef} className="w-full h-24"></canvas>
    </div>
  );
};

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div className="container">
      <canvas ref={canvasRef} className="w-full h-24"></canvas>
    </div>
  );
};

const Cover = () => {
  const animations = [
    "ripple",
    "dottedWaves",
    // "globe"
  ];
  const [activeAnimation, setActiveAnimation] = useState("dottedWaves");

  const handleToggleAnimations = () => {
    const nextAnimation = animations.findIndex(
      (animation) => animation === activeAnimation
    );
    const nextAnimationExists = nextAnimation + 1 < animations.length;

    if (!nextAnimationExists) {
      setActiveAnimation(animations[0]);
      return;
    }

    setActiveAnimation(animations[nextAnimation + 1]);
  };
  return (
    <div className="w-full cursor-pointer" onClick={handleToggleAnimations}>
      {activeAnimation === "dottedWaves" && <DottedWaves />}
      {activeAnimation === "ripple" && <Ripple />}
      {activeAnimation === "globe" && <Globe />}
      <div className="container relative">
        <span className="bg-background absolute bottom-0 right-0 text-[8px] font-heading">
          {activeAnimation}
        </span>
      </div>
    </div>
  );
};

export default Cover;
