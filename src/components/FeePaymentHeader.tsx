import React from "react";
import { Download } from "lucide-react"; // Import Download icon

const FeePaymentHeader: React.FC = () => {
  return (
    <div className="flex justify-between text-blue-800 items-center mb-4">
      <h1 className="text-2xl font-bold">Fee Payment Details</h1>
      <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        <Download className="w-5 h-5 mr-2" /> {/* Icon before text */}
        Download Report
      </button>
    </div>
  );
};

export default FeePaymentHeader;
