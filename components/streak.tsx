export default function Streak() {
    return (
      <div className="p-4 border-b border-gray-200 bg-[#F24822] shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-white">Points Today!</h1>
        <div className="m-2 space-y-2">
          <h2 className="text-5xl font-semibold text-[#FFF388]">82 pts</h2>
          <div className="flex flex-col text-gray-600">
            <span className="text-white">129 pts</span>
            <span className="text-white">cumulated points</span>
          </div>
        </div>
      </div>
    );
  }