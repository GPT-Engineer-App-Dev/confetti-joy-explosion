import { useState, useCallback } from 'react';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';

const ConfettiButton = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = useCallback(() => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  }, []);

  return (
    <div className="relative">
      <Button onClick={handleConfetti} className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-500 hover:scale-110">
        Celebrate!
      </Button>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default ConfettiButton;
