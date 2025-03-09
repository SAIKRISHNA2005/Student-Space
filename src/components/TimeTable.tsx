import React from 'react';

interface TimetableProps {
  activeDay: string;
}

const Timetable: React.FC<TimetableProps> = ({ activeDay }) => {
  // Mock data for the timetable
  const timetable: { [key: string]: Array<{ subject: string; time: string; teacher?: string; type?: string }> } = {
    Monday: [
      { subject: 'Mathematics', time: '7:30 - 8:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Economics', time: '8:15 - 8:50', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Business Studies', time: '8:55 - 9:30', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Short Break', time: '9:30 - 9:40', type: 'break' },
      { subject: 'Computer Science', time: '9:45 - 10:20', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'Computer Science', time: '10:25 - 11:05', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'English', time: '11:10 - 11:40', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Lunch Break', time: '11:40 - 12:10', type: 'break' },
      { subject: 'Physical Education', time: '12:15 - 12:50', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Physical Education', time: '12:55 - 1:25', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Accountancy', time: '1:30 - 2:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
    ],
  
    Tuesday: [
      { subject: 'Mathematics', time: '7:30 - 8:10', teacher: 'Mr. Sharma', type: 'Theory Class' },
      { subject: 'Physics', time: '8:15 - 8:50', teacher: 'Mr. Kumar', type: 'Theory Class' },
      { subject: 'Chemistry', time: '8:55 - 9:30', teacher: 'Dr. Patel', type: 'Theory Class' },
      { subject: 'Short Break', time: '9:30 - 9:40', type: 'break' },
      { subject: 'Computer Science', time: '9:45 - 10:20', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'Computer Science', time: '10:25 - 11:05', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'English', time: '11:10 - 11:40', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Lunch Break', time: '11:40 - 12:10', type: 'break' },
      { subject: 'Physical Education', time: '12:15 - 12:50', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Physical Education', time: '12:55 - 1:25', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Accountancy', time: '1:30 - 2:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
    ],
  
    Wednesday: [
      { subject: 'Mathematics', time: '7:30 - 8:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Biology', time: '8:15 - 8:50', teacher: 'Dr. Sharma', type: 'Theory Class' },
      { subject: 'Business Studies', time: '8:55 - 9:30', teacher: 'Mr. Gupta', type: 'Theory Class' },
      { subject: 'Short Break', time: '9:30 - 9:40', type: 'break' },
      { subject: 'Computer Science', time: '9:45 - 10:20', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'Computer Science', time: '10:25 - 11:05', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'English', time: '11:10 - 11:40', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Lunch Break', time: '11:40 - 12:10', type: 'break' },
      { subject: 'Physical Education', time: '12:15 - 12:50', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Physical Education', time: '12:55 - 1:25', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Accountancy', time: '1:30 - 2:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
    ],
  
    Thursday: [
      { subject: 'Mathematics', time: '7:30 - 8:10', teacher: 'Mr. Sharma', type: 'Theory Class' },
      { subject: 'Economics', time: '8:15 - 8:50', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Business Studies', time: '8:55 - 9:30', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Short Break', time: '9:30 - 9:40', type: 'break' },
      { subject: 'Computer Science', time: '9:45 - 10:20', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'Computer Science', time: '10:25 - 11:05', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'English', time: '11:10 - 11:40', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Lunch Break', time: '11:40 - 12:10', type: 'break' },
      { subject: 'Physical Education', time: '12:15 - 12:50', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Physical Education', time: '12:55 - 1:25', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Accountancy', time: '1:30 - 2:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
    ],
  
    Friday: [
      { subject: 'Mathematics', time: '7:30 - 8:10', teacher: 'Mr. Sharma', type: 'Theory Class' },
      { subject: 'Chemistry', time: '8:15 - 8:50', teacher: 'Dr. Patel', type: 'Theory Class' },
      { subject: 'Biology', time: '8:55 - 9:30', teacher: 'Dr. Sharma', type: 'Theory Class' },
      { subject: 'Short Break', time: '9:30 - 9:40', type: 'break' },
      { subject: 'Computer Science', time: '9:45 - 10:20', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'Computer Science', time: '10:25 - 11:05', teacher: 'Mr. Yogeshwaran V', type: 'Lab Class' },
      { subject: 'English', time: '11:10 - 11:40', teacher: 'Mrs. Divya V', type: 'Theory Class' },
      { subject: 'Lunch Break', time: '11:40 - 12:10', type: 'break' },
      { subject: 'Physical Education', time: '12:15 - 12:50', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Physical Education', time: '12:55 - 1:25', teacher: 'Mrs. Divya V', type: 'Phy Activity' },
      { subject: 'Accountancy', time: '1:30 - 2:10', teacher: 'Mrs. Divya V', type: 'Theory Class' },
    ],  
  };

  return (
    <div className="md:max-w-3xl sm:max-w-2xl mx-auto space-y-2">
      {timetable[activeDay].map((entry, index) => (
        <div
          key={index}
          className={`border border-[#1E3A8A] rounded-lg p-2 flex justify-between items-center ${entry.type === 'break' ? 'bg-[#1E3A8A] text-white' : 'bg-white'}`}
        >
          <div className="flex flex-col">
            <strong className={`md:text-lg sm:text-md ${entry.type === 'break' ? 'text-white' : 'text-[#1E3A8A]'}`}>{entry.subject}</strong>
            {entry.type && entry.type !== 'break' && <span className="text-sm text-gray-600">{entry.type}</span>}
          </div>
          <span className={`md:text-lg sm:text-md ${entry.type === 'break' ? 'text-white' : 'text-[#1E3A8A]'}`}>{entry.time}</span>
          <span className={`md:text-sm sm:text-xs ${entry.type === 'break' ? 'text-white' : 'text-[#1E3A8A]'}`}>{entry.teacher}</span>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
