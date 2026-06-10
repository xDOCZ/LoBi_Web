import { useEffect, useRef, useState } from "react";


// Animação do carregamento do site
function AnimatedLetters({ text, className, start = 0, onDone }) {
  const length = text.length;

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={`${className}-${index}`}
          className="loader-char"
          style={{ "--loader-char-index": start + index }}
          onAnimationEnd={index === length - 1 ? onDone : undefined}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function BrandLoader({ visible, minimumDone, onExitDone }) {
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [lettersDone, setLettersDone] = useState(false);
  const exitStartedRef = useRef(false);

  useEffect(() => {
    if (!visible) {
      setPhase(0);
      setExiting(false);
      setLettersDone(false);
      exitStartedRef.current = false;
      return;
    }

    const timer = setTimeout(() => setPhase(1), 450);
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (!visible || !lettersDone || !minimumDone || exitStartedRef.current) {
      return;
    }

    exitStartedRef.current = true;
    setExiting(true);

    const timer = setTimeout(() => {
      onExitDone?.();
    }, 520);

    return () => clearTimeout(timer);
  }, [lettersDone, minimumDone, onExitDone, visible]);

  function handleLettersDone() {
    setLettersDone(true);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className={`loader-wrap${exiting ? " loader-exit" : ""}`}>
      <div className="loader-ambient loader-ambient-left" aria-hidden />
      <div className="loader-ambient loader-ambient-right" aria-hidden />

      <div className="loader-stage">
        <div className={`loader-word ${phase === 1 ? "run" : ""}`}>
          <span className="loader-accent lo-anchor">Lo</span>
          <AnimatedLetters text="cação " className="loader-letters lo-tail" start={0} />
          <AnimatedLetters text="Imo" className="loader-letters bi-left" start={6} />
          <span className="loader-accent bi-anchor">Bi</span>
          <AnimatedLetters
            text="liária"
            className="loader-letters bi-right"
            start={9}
            onDone={handleLettersDone}
          />
        </div>
        <p className="loader-caption">Realizando sonhos com qualidade e excelência</p>
      </div>
    </div>
  );
}
