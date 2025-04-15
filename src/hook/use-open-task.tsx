import { useEffect, useState } from 'react';

export const useOpenTask = () => {
  const [open, setopen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setopen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpen = () => {
    setopen((prev) => !prev);
  };

  return { open, handleOpen };
};
