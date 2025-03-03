import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Reminders: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-[#1E3A8A] text-4xl font-bold mb-4">Reminders</h2>
      <div className="space-y-4">
        <div className="border border-[#1E3A8A] p-4 rounded-lg">
          <h3 className="text-xl text-[#1E3A8A] font-semibold py-2">Computer Science</h3>
          <p>Complete Experiment 6 in Lab Section and submit the report.</p>
          <p className="text-sm text-gray-500">Due Date: 28 Nov'24</p>
          <div className='flex flex-1'>
            <FaUserCircle className="text-gray-500 mr-2" />
            <p className="text-sm text-gray-500"> Teacher Name</p>
          </div>
          <button className="text-[#1E3A8A]">View More</button>
        </div>
        <div className="border border-[#1E3A8A] p-4 rounded-lg">
          <h3 className="text-xl text-[#1E3A8A] font-semibold py-2">Mathematics</h3>
          <p>Submit the solutions for Chapter 6 and 7.</p>
          <p className="text-sm text-gray-500">Due Date: 28 Nov'24</p>
          <div className='flex flex-1'>
            <FaUserCircle className="text-gray-500 mr-2" />
            <p className="text-sm text-gray-500"> Teacher Name</p>
          </div>
          <button className="text-[#1E3A8A]">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
