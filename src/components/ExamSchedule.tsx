import React from 'react';

const ExamSchedule: React.FC = () => {
  return (
    <div className="max-w-screen-md h-10 mb-10">
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Exam Schedule</h2>
      <div className="text-center text-gray-600 p-4 rounded-lg border border-[#1E3A8A]">
        <p>No exams scheduled yet.</p>
      </div>
    </div>
  );
};

export default ExamSchedule;
