import React, { useState } from "react";
import PaymentList from "../components/PaymentList";
import UpcomingPayments from "../components/UpcomingPayments";
import FeePaymentHeader from "../components/FeePaymentHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { X } from "lucide-react";

const FeePaymentPage = () => {
  const [filter, setFilter] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Desktop) */}
      <div className="hidden md:block w-56">
        <Sidebar />
      </div>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
          <div className="absolute inset-y-0 left-0 w-56 bg-[#1E3A8A] text-white shadow-lg">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <X size={24} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Fee Payment Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
            {/* Fee Payment Header */}
            <FeePaymentHeader />

            {/* Recent Payments Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#1E3A8A]">Recent Payments</h2>
                <div className="flex space-x-2">
                  {["All", "Paid", "Pending"].map((status) => (
                    <button
                      key={status}
                      className={`px-4 py-1 rounded-lg border transition-all duration-200 ${
                        filter === status
                          ? "bg-[#1E3A8A] text-white"
                          : "border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-100"
                      }`}
                      onClick={() => setFilter(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment List */}
              <PaymentList filter={filter} />
            </div>

            {/* Upcoming Payments Section */}
            <h2 className="text-lg font-semibold text-[#1E3A8A] mb-4">Upcoming Payments</h2>
            <UpcomingPayments />
          </div>
        </main>
      </div>
    </div>
  );
};

export default FeePaymentPage;
