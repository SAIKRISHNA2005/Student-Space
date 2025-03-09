import React from "react";

interface FilterTabsProps {
  filter: "All" | "Paid" | "Pending";
  setFilter: (filter: "All" | "Paid" | "Pending") => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4 border-b pb-2">
      {["All", "Paid", "Pending"].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            filter === tab ? "border-b-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold" : "text-gray-600"
          }`}
          onClick={() => setFilter(tab as "All" | "Paid" | "Pending")}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
