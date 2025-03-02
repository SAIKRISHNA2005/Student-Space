import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Timetable from '../components/TimeTable';
import Reminders from '../components/Reminders';
import ExamSchedule from '../components/ExamSchedule';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ClassTimetable = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="hidden md:block w-56 bg-[#1E3A8A] text-white shadow-lg">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 flex flex-col">
          <div className="flex-1 flex">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-blue-900 mb-4">Class Timetable</h1>
              <div className="flex space-x-2 mb-6">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 rounded-lg text-lg font-medium transition-all ${activeDay === day ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <Timetable activeDay={activeDay} />
            </div>
            <div className="w-80 ml-4">
              <Reminders />
            </div>
          </div>
          <div className="mt-4">
            <ExamSchedule />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassTimetable;