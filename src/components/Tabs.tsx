import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faSliders } from '@fortawesome/free-solid-svg-icons'; // Example icon to use

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Subjects");

  const tabs = [
    { name: "Subjects" },
    { name: "Recently Added" },
    { name: "Important" },
    { name: "Last Seen" },
  ];

  return (
    <div className="flex items-center space-x-3 pb-4">
      <FontAwesomeIcon icon={faSliders} className="text-[#1E3A8A] rounded-full md:p-2 sm:p-2" />
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`md:px-3 md:py-1 xs:px-4 xs:py-1 md:text-md xs:text-sm font-medium transition-all rounded-lg ${
            activeTab === tab.name ? "bg-[#1E3A8A] text-white" : "bg-white text-[#1E3A8A] border border-[#1E3A8A]"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;