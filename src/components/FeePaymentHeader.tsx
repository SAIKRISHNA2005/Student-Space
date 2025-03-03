import React from "react";
import { Download } from "lucide-react"; // Import Download icon

const FeePaymentHeader: React.FC = () => {
  return (
    <div className="flex justify-between text-[#1E3A8A] items-center mb-4">
      <h1 className="text-2xl font-bold">Fee Payment Details</h1>
      <button className="flex items-center bg-[#1E3A8A] text-white px-4 py-2 rounded-md hover:bg-[#1E3A8A]">
        <Download className="w-5 h-5 mr-2" /> {/* Icon before text */}
        Download Report
      </button>
    </div>
  );
};

export default FeePaymentHeader;
