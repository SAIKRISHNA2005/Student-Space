import React from "react";

const upcomingPayments = [
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
  { name: "Examination Fee", type: "Term 2", amount: "Rs. 3,800.00", due: "18 Dec '24", status: "Pending" },
];

const UpcomingPayments = () => {
  return (
    <div className="border rounded-lg p-4">
      {upcomingPayments.map((payment, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b last:border-none">
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-[#1E3A8A] rounded-full" />
            <div>
              <p className="text-[#1E3A8A] font-medium">{payment.name}</p>
              <p className="text-sm text-gray-500">{payment.type}</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-right">
            <p className="font-medium text-[#1E3A8A]">{payment.amount}</p>  {/* Updated text color */}
            <p className="text-sm text-gray-500">Due {payment.due}</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-[#1E3A8A]">Payment Pending</p>  {/* Updated text color */}
            <button className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
              Download Invoice
            </button>
            <button className="px-3 py-1 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#1E3A8A] transition">
              Pay Fee
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingPayments;
