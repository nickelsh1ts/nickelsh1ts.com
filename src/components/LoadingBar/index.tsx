'use client';

import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="LoadingContainer">
      <div className="loadingBar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LoadingBar;
