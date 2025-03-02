import React from 'react';

const ExamSchedule: React.FC = () => {
  return (
    <div className="max-w-3xl bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Exam Schedule</h2>
      <div className="bg-gray-100 p-4 rounded">
        <p>No exams scheduled yet.</p>
      </div>
    </div>
  );
};

export default ExamSchedule;
