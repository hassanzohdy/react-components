import { useEffect, useRef, useState } from "react";
import classes from "./Progress.module.scss";

export type ProgressProps = {
  /**
   * If set to true, the progress bar will be animated and stop at 100 until
   * it is set to false again.
   */
  loading?: boolean;
  /**
   * Control the progress value
   */
  value?: number;
  /**
   * Progress Bar height
   */
  height?: number;
  /**
   * Progress Bar glow height
   */
  glow?: number;
  /**
   * The color of the progress bar
   */
  color?: string;
  /**
   * The color of the progress bar glow effect
   */
  glowColor?: string;
};

export default function Progress({
  loading: incomingLoading = true,
  value: incomingProgress,
  height = 5,
  glow = 20,
  color = "#21a6e9",
  glowColor = "#21a6e9",
}: ProgressProps) {
  // create a progress state to show the progress of the loading
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<any>();

  const isControlled = incomingProgress !== undefined;

  const [loading, setLoading] = useState(incomingLoading);

  const hide = () => {
    progressRef.current.style.display = "none";
  };

  const show = () => {
    if (!progressRef.current) return;
    progressRef.current.style.display = "block";
  };
  const set = (value: number) => {
    progressRef.current.style.width = `${value}%`;
    setProgress(value);
  };

  useEffect(() => {
    if (isControlled) return;

    if (!loading) return;

    // create an interval to be updated every 100ms
    const interval = setInterval(() => {
      show();
      // update the progress state by 10
      let newProgress = progress + 10;

      setProgress(newProgress);

      // update the progress bar width
      set(newProgress);
    }, 100);

    // clear the interval when the progress state is 100

    if (progress === 100) {
      // update the progress bar width
      set(100);

      clearInterval(interval);
    }

    // return a function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [progress, loading, isControlled]);

  useEffect(() => {
    if (incomingProgress === undefined) return;

    if (incomingProgress >= 100) {
      set(100);

      setTimeout(() => {
        hide();
      }, 700);
      return;
    } else if (incomingProgress === 0) {
      hide();
      return;
    } else {
      show();
      setTimeout(() => {
        set(incomingProgress);
      }, 0);
    }
  }, [incomingProgress]);

  useEffect(() => {
    setLoading(incomingLoading);

    if (!incomingLoading && incomingLoading !== loading) {
      set(100);

      setTimeout(() => {
        hide();
      }, 500);
    }
  }, [incomingLoading, loading]);

  return (
    <div className={classes.root}>
      <div className={classes.progressWrapper}>
        <div
          ref={progressRef}
          style={{
            boxShadow: `0 0 ${glow}px ${glowColor}`,
            height: `${height}px`,
            backgroundColor: color,
          }}
          className={classes.progress}
        />
      </div>
    </div>
  );
}
