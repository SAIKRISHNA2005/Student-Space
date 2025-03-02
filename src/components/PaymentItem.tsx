import React, { useState } from "react";

const PaymentItem = ({ name, type, amount, due, status, isFeePaymentDetails }: any) => {
  const [isPaid, setIsPaid] = useState(status === "Paid");
  const truncatedName = name.length > 10 ? name.substring(0, 10) + "..." : name;

  const handleCheckboxChange = () => {
    setIsPaid(!isPaid);
  };

  return (
    <div className="flex justify-between items-center sm:py-1 md:py-2 border-b last:border-none">
      {/* Left Side */}
      <div className="flex items-center md:space-x-3 sm:space-x-2">
        {/* Status Indicator */}
        <div
          className={`md:w-1 md:h-10 sm:w-1 sm:h-6 rounded-full ${isPaid ? "bg-green-500" : "bg-red-500"}`}
        />

        {/* Payment Info */}
        <div>
          {/* Name with truncation and tooltip on hover */}
          <p className="text-blue-700 font-medium truncate" title={name}>
            {truncatedName}
          </p>
          <p className="md:text-sm sm:text-1xs text-gray-500">{type}</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-left">
        <p className="md:font-medium sm:text-sm text-blue-600">{amount}</p>
        <p className="sm:text-xs md:text-sm text-gray-500">Due {due}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center md:space-x-3 sm:space-x-2">
        {/* Checkbox and Status Text */}
        <input
          type="checkbox"
          checked={isPaid}
          onChange={handleCheckboxChange}
          className="md:w-4 md:h-4 sm:w-3 sm:h-3"
        />
        <p className="md:text-sm sm:text-xs text-blue-600">
          {isPaid ? "Payment Received" : "Payment Pending"}
        </p>

        {/* Download Invoice Button */}
        <button
          className={`md:px-3 md:py-1 sm:px-2 sm:py-0.5 text-white rounded-lg transition ${
            isPaid ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Download Invoice
        </button>
        {/* Conditional Button */}
        {!isFeePaymentDetails && (
          <button
            className={`md:px-3 md:py-1 sm:px-2 sm:py-0.5 text-white rounded-lg transition ${
              isPaid ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
            }`}
            disabled={isPaid}
          >
            Pay Fee
          </button>
        )}

      </div>
    </div>
  );
};

export default PaymentItem;
