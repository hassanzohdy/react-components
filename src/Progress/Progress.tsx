import { useEffect, useRef, useState } from "react";
import classes from "./Progress.module.scss";

export type ProgressProps = {
  loading?: boolean;
  progress?: number;
};

export default function Progress({
  loading,
  progress: incomingProgress,
}: ProgressProps) {
  // create a progress state to show the progress of the loading
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<any>();

  useEffect(() => {
    if (!loading) {
      progressRef.current.style.display = "none";
      progressRef.current.style.width = "0";
      setProgress(0);
      return;
    }
    // create an interval to be updated every 100ms
    const interval = setInterval(() => {
      progressRef.current.style.display = "block";
      // update the progress state by 10
      let newProgress = incomingProgress ? incomingProgress : progress + 10;

      setProgress(newProgress);

      // update the progress bar width
      progressRef.current.style.width = `${newProgress}%`;
    }, 100);

    // clear the interval when the progress state is 100

    if (progress === 100 || incomingProgress === 100) {
      // update the progress bar width
      progressRef.current.style.width = `100%`;

      clearInterval(interval);
    }

    // return a function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [progress, loading, incomingProgress]);

  return (
    <div className={classes.root}>
      <div className={classes.progressWrapper}>
        <div ref={progressRef} className={classes.progress} />
      </div>
    </div>
  );
}
