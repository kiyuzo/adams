export default function DailyReport() {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Daily Report</h2>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-xl font-bold">127</div>
            <div className="text-xs text-gray-500 mt-1">Air quality index</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-xl font-bold">122</div>
            <div className="text-xs text-gray-500 mt-1">Washing hours</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-xl font-bold">123</div>
            <div className="text-xs text-gray-500 mt-1">Washing minutes</div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h3 className="font-medium">Daily you look today!</h3>
          <p className="text-sm text-gray-600 mt-1">
            Great job staying in open zones 80% of your time today, especially around Siemen. 
            Try avoiding the Ring Road area tomorrow – it's been red all week.
          </p>
        </div>
      </div>
    );
  }