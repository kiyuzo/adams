export default function WeeklyReport() {
  // Data variables to be filled
  const chartTitle = "Air quality index"; // Change this to your desired chart title
  const yAxisLabel = "Working Hours"; // Change this to your desired y-axis label
  
  // Sample data - replace with your actual data
  const intensityData = [4, 7, 5, 8, 6, 3, 2]; // Values between 0-10
  
  // Calculate the maximum value for scaling the graph
  const maxIntensity = Math.max(...intensityData, 10);

  return (
    <div className="space-y-2">
      {/* Title moved outside the component container */}
      <h2 className="text-lg font-semibold">Weekly Report</h2>
      
      <div className="p-4 bg-[#D9D9D9] rounded-lg shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium text-sm">{chartTitle}</div>
          <div className="text-sm text-gray-600">{yAxisLabel}</div>
        </div>
        
        <div className="flex h-48 border-b border-l border-gray-300">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full mr-2">
            {[10, 8, 6, 4, 2, 0].map((value) => (
              <div key={value} className="text-xs text-gray-500 h-8 flex items-center">
                <span className="w-4 text-right">{value}</span>
              </div>
            ))}
          </div>
          
          {/* Chart bars and grid lines */}
          <div className="relative flex-grow">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-t border-gray-200 h-8"></div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-around h-full items-end px-2">
              {intensityData.map((intensity, index) => (
                <div 
                  key={index}
                  className="w-6 bg-blue-500 rounded-t-sm"
                  style={{ height: `${(intensity / maxIntensity) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* X-axis day labels */}
        <div className="flex justify-around mt-1 text-xs text-gray-600">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="w-6 text-center">{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
}