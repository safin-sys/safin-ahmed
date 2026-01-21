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
      const container = document.querySelector(
        ".container",
      ) as HTMLElement;
      if (container) {
        const width = container.offsetWidth;
        const newCols = Math.max(
          5,
          Math.floor((width / dotSpacing) * 1.8),
        );
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
              row * 0.5,
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
  useEffect(() => { }, []);
  return (
    <div className="container">
      <canvas ref={canvasRef} className="w-full h-24"></canvas>
    </div>
  );
};

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fontHeight = 8;

  const numbers = "0123456789";
  const operators = "#+-\\/|=";
  const katakana =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ";
  const hiragana =
    "あいうえおかきくけこがぎぐげごさしすせそざじずぜぞtたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわゐゑをん";
  const alphabet = numbers + operators + katakana + hiragana;

  const spawnInterval = 500;
  const density = 0.7;
  const glitchInterval = 500;
  const glitchAmount = 0.01;
  const moveScale = 0.012;
  const speedBase = 1.0;
  const speedDeviation = 0.4;
  const streaks = 1.9;
  const brightRatio = 0.1;

  interface Glyph {
    glyph: string;
    flipped: boolean;
    bright: boolean;
  }

  interface Trail {
    col: number;
    universeAt: number;
    headAt: number;
    speed: number;
    length: number;
  }

  const randomGlyph = (): Glyph => {
    return {
      glyph: alphabet[Math.floor(Math.random() * alphabet.length)],
      flipped: Math.random() < 0.5,
      bright: Math.random() < brightRatio,
    };
  };

  const makeUniverse = (size: number): Glyph[] => {
    const out: Glyph[] = [];
    for (let i = 0; i < size; i++) {
      out.push(randomGlyph());
    }
    return out;
  };

  const universeRef = useRef<Glyph[]>(makeUniverse(1000));
  const trailsRef = useRef<Trail[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = document.querySelector(".container") as HTMLElement;
    if (!container) return;

    let w: number;
    let h: number;
    let charHeight: number;
    let colWidth: number;
    let colsPerLine: number;
    let charsOnCol: number;

    const setCanvasExtents = () => {
      w = container.offsetWidth;
      h = container.offsetHeight || 96;
      canvas.width = w;
      canvas.height = h;

      ctx.font = fontHeight + "px sans-serif";
      ctx.textBaseline = "top";
      const charSize = ctx.measureText("ネ");

      colWidth = charSize.width * 1.15;
      charHeight = fontHeight * 1.15;

      charsOnCol = Math.ceil(h / charHeight);
      if (charsOnCol <= 0) {
        charsOnCol = 1;
      }
      colsPerLine = Math.ceil(w / colWidth);
      if (colsPerLine <= 0) {
        colsPerLine = 1;
      }
    };

    setCanvasExtents();

    const handleResize = () => {
      setCanvasExtents();
    };
    window.addEventListener("resize", handleResize);

    const makeTrail = (
      col: number,
      maxSpeed: number | null = null,
      headAt: number | null = null,
    ): Trail => {
      let speed =
        speedBase +
        (Math.random() * speedDeviation * 2 - speedDeviation);

      if (maxSpeed !== null && maxSpeed > 0 && speed > maxSpeed) {
        speed = maxSpeed;
      }

      if (headAt === null) {
        headAt = -Math.floor(Math.random() * 2 * charsOnCol);
      }

      return {
        col: col,
        universeAt: Math.floor(
          Math.random() * universeRef.current.length,
        ),
        headAt: headAt,
        speed: speed,
        length: Math.floor(Math.random() * streaks * charsOnCol) + 8,
      };
    };

    const clear = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const rgb = "#008000";
    const rgbBright = "#20E020";
    const rgbHead = ["#F0FFF0", "#D0F0D0", "#80C080", "#40B040"];
    const rgbTail = ["#000500", "#003000", "#005000", "#007000"];

    const drawTrail = (trail: Trail) => {
      const head = Math.round(trail.headAt);

      if (head < 0) return;

      const x = trail.col * colWidth;
      let y = head * charHeight + charHeight * 0.35;

      for (let i = 0; i < trail.length; i++, y -= charHeight) {
        if (y < 0) break;
        if (y > h) continue;

        const idx =
          (trail.universeAt + head - i) % universeRef.current.length;
        const item = universeRef.current[idx];

        if (i < rgbHead.length) {
          ctx.fillStyle = rgbHead[i];
        } else if (trail.length - i - 1 < rgbTail.length) {
          ctx.fillStyle = rgbTail[trail.length - i - 1];
        } else {
          if (item.bright) {
            ctx.fillStyle = rgbBright;
          } else {
            ctx.fillStyle = rgb;
          }
        }

        if (item.flipped) {
          ctx.setTransform(-1, 0, 0, 1, 0, 0);
          ctx.fillText(item.glyph, -x - colWidth, y);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          ctx.fillText(item.glyph, x, y);
        }
      }
    };

    const moveTrails = (distance: number) => {
      const trailsToRemove: number[] = [];

      const count = trailsRef.current.length;
      for (let i = 0; i < count; i++) {
        const trail = trailsRef.current[i];
        trail.headAt += trail.speed * distance;

        const tip = trail.headAt - trail.length;
        if (tip * charHeight > h) {
          trailsToRemove.push(i);
        }
      }

      while (trailsToRemove.length > 0) {
        trailsRef.current.splice(trailsToRemove.pop()!, 1);
      }
    };

    const spawnTrails = () => {
      const topTrailPerCol: { [key: number]: Trail } = {};
      for (let i = 0; i < trailsRef.current.length; i++) {
        const trail = trailsRef.current[i];
        const trailTop = trail.headAt - trail.length;
        const top = topTrailPerCol[trail.col];
        if (!top || top.headAt - top.length > trailTop) {
          topTrailPerCol[trail.col] = trail;
        }
      }

      for (let i = 0; i < colsPerLine; i++) {
        let spawnProbability = 0.0;
        let maxSpeed: number | null = null;
        let headAt: number | null = null;

        if (!topTrailPerCol[i]) {
          spawnProbability = 1.0;
        } else {
          const topTrail = topTrailPerCol[i];
          const tip = Math.round(topTrail.headAt) - topTrail.length;
          if (tip > 0) {
            const emptySpaceRatio = tip / charsOnCol;
            spawnProbability = emptySpaceRatio;
            maxSpeed = topTrail.speed * (1 + emptySpaceRatio);
            headAt = 0;
          }
        }

        const effectiveP = spawnProbability * density;
        const p = Math.random();

        if (p < effectiveP) {
          trailsRef.current.push(makeTrail(i, maxSpeed, headAt));
        }
      }
    };

    const glitchUniverse = (count: number) => {
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(
          Math.random() * universeRef.current.length,
        );
        universeRef.current[idx] = randomGlyph();
      }
    };

    let prevTime = performance.now();
    let glitchCollect = 0;
    let spawnCollect = 0;
    let animationFrameId: number;

    const tick = (time: number) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveTrails(elapsed * moveScale);

      spawnCollect += elapsed;
      while (spawnCollect > spawnInterval) {
        spawnCollect -= spawnInterval;
        spawnTrails();
      }

      glitchCollect += elapsed;
      while (glitchCollect > glitchInterval) {
        glitchCollect -= glitchInterval;
        glitchUniverse(
          Math.floor(universeRef.current.length * glitchAmount),
        );
      }

      clear();

      const count = trailsRef.current.length;
      for (let i = 0; i < count; i++) {
        const trail = trailsRef.current[i];
        drawTrail(trail);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      const container = document.querySelector(
        ".container",
      ) as HTMLElement;
      if (container) {
        const width = container.offsetWidth;
        const newCols = Math.max(
          5,
          Math.floor((width / dotSpacing) * 1.9),
        );
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

          const distance = Math.hypot(
            col - centerCol,
            row - centerRow,
          );
          const offset =
            Math.sin(time * 0.005 * waveSpeed - distance * 0.5) *
            waveAmplitude;

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

const Cover = () => {
  const animations = [
    "dottedWaves",
    "ripple",
    "matrix",
  ];
  const [activeAnimation, setActiveAnimation] = useState("dottedWaves");

  const handleToggleAnimations = () => {
    const nextAnimation = animations.findIndex(
      (animation) => animation === activeAnimation,
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
      {activeAnimation === "matrix" && <Matrix />}
      {activeAnimation === "ripple" && <Ripple />}
      <div className="container relative">
        <span className="bg-background absolute bottom-0 right-0 text-[8px] font-heading">
          {activeAnimation}
        </span>
      </div>
    </div>
  );
};

export default Cover;
