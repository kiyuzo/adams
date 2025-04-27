export default function WeeklyReport() {
    const days = ['TUE', 'NE3', 'THU', 'FRI', 'SAT', 'GUN'];
    
    return (
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Weekly Report</h2>
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Air quality index</span>
          <span className="text-sm">Washing Hours</span>
        </div>
        
        <div className="flex justify-between">
          {days.map((day) => (
            <div key={day} className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-medium">
                100%
              </div>
              <span className="text-xs mt-1">{day}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }