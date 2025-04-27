export default function Streak() {
    return (
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Profile</h1>
        
        <div className="mt-4 space-y-2">
          <h2 className="text-lg font-semibold">Points Today!</h2>
          <div className="flex space-x-4 text-gray-600">
            <span>82 pts</span>
            <span>120 pts</span>
            <span>Correction points</span>
          </div>
        </div>
      </div>
    );
  }