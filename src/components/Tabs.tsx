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
      <FontAwesomeIcon icon={faSliders} className="text-blue-900 rounded-full md:p-2 sm:p-2" />
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`md:px-2 md:py-1 sm:px-2 sm:py-0.5 md:text-lg sm:text-xs font-medium transition-all rounded-lg ${
            activeTab === tab.name ? "bg-blue-900 text-white" : "bg-white text-blue-900 border border-blue-600"
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