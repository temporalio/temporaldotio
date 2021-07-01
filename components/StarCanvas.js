import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const PROXIMITY_RATIO = 0.1;
const DENSITY_RATIO = 0.5;
const SCALE_LIMIT = 2;
const ALPHA_LIMIT = 0.2;
const SIZE_LIMIT = 2;
const LIGHT_START = 85;
const PHRASE = 'temporal';

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const starsRef = useRef(null);
  const scaleRangerRef = useRef(null);
  const alphaRangerRef = useRef(null);
  const keysRef = useRef([]);
  const partyRef = useRef(null);
  const satRef = useRef(0);
  const lightRef = useRef(LIGHT_START);

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d');
    const LOAD = () => {
      const VMIN = Math.min(window.innerWidth, window.innerHeight);
      scaleRangerRef.current = gsap.utils.mapRange(0, VMIN * PROXIMITY_RATIO, SCALE_LIMIT, 1);
      alphaRangerRef.current = gsap.utils.mapRange(0, VMIN * PROXIMITY_RATIO, 1, ALPHA_LIMIT);
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const STAR_COUNT = Math.floor(Math.sqrt(Math.pow(VMIN, 2)) * DENSITY_RATIO);
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        hue: gsap.utils.random(0, 360),
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        size: gsap.utils.random(1, SIZE_LIMIT),
        scale: 1,
        alpha: ALPHA_LIMIT
      }));
    };

    LOAD();

    const UPDATE = ({ x, y }) => {
      for (const STAR of starsRef.current) {
        const DISTANCE = Math.sqrt(Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2));
        gsap.to(STAR, {
          scale: scaleRangerRef.current(
            Math.min(DISTANCE, Math.min(window.innerWidth, window.innerHeight) * PROXIMITY_RATIO)
          ),
          alpha: alphaRangerRef.current(
            Math.min(DISTANCE, Math.min(window.innerWidth, window.innerHeight) * PROXIMITY_RATIO)
          )
        });
      }
    };

    const EXIT = () => {
      gsap.to(starsRef.current, {
        scale: 1,
        alpha: ALPHA_LIMIT
      });
    };

    const RENDER = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (const STAR of starsRef.current) {
        contextRef.current.fillStyle = `hsla(${STAR.hue}, ${satRef.current}%, ${lightRef.current}%, ${STAR.alpha})`;
        contextRef.current.beginPath();
        contextRef.current.arc(STAR.x, STAR.y, STAR.size * STAR.scale, 0, 2 * Math.PI);
        contextRef.current.fill();
      }
    };

    document.addEventListener('pointermove', UPDATE);
    document.addEventListener('pointerleave', EXIT);
    window.addEventListener('resize', LOAD);

    gsap.ticker.add(RENDER);
    gsap.ticker.fps(24);

    return () => {
      document.removeEventListener('pointermove', UPDATE);
      document.removeEventListener('pointerleave', EXIT);
      gsap.ticker.remove(RENDER);
    };
  }, []);

  // Easter Egg Effect
  useEffect(() => {
    const shouldWeParty = (e) => {
      keysRef.current.push(e.key);
      if (
        keysRef.current
          .slice(keysRef.current.length - PHRASE.length, keysRef.current.length)
          .join('')
          .toLowerCase() === PHRASE &&
        (!partyRef.current ||
          (partyRef.current &&
            (partyRef.current.progress() === 0 || partyRef.current.progress() === 1)))
      ) {
        // Let's party
        keysRef.current.length = 0;
        satRef.current = 80;
        lightRef.current = 50;
        partyRef.current = gsap
          .timeline({
            onComplete: () => {
              gsap
                .timeline()
                .to(lightRef, {
                  current: LIGHT_START
                })
                .to(
                  satRef,
                  {
                    current: 0
                  },
                  0
                );
            }
          })
          .to(
            lightRef,
            {
              current: 50
            },
            0
          )
          .to(
            satRef,
            {
              current: 80
            },
            0
          )
          .to(
            starsRef.current,
            {
              hue: gsap.utils.random(0, 359),
              yoyo: true,
              repeat: 10
            },
            0
          );
      }
    };
    window.addEventListener('keyup', shouldWeParty);
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full fixed inset-0 bg-spaceblack -z-1" />;
};

export default StarCanvas;
