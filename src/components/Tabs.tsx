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
    <div className="flex items-center space-x-4 pb-2">
      <FontAwesomeIcon icon={faSliders} className="text-blue-900 rounded-full p-2" />
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`px-4 py-2 rounded-lg ${
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