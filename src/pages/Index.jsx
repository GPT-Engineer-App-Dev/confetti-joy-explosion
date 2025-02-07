import ConfettiButton from '../components/ConfettiButton';

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-lime-400">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Cool Confetti App</h1>
        <p className="text-xl text-white">Click the button to celebrate with confetti!</p>
      </div>
      <ConfettiButton />
    </div>
  );
};

export default Index;
