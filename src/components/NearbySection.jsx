import React, { useState } from "react";
import { MapPin } from "lucide-react";

const NearbySection = () => {
  const [activeTab, setActiveTab] = useState("LANDMARKS");

  const tabData = {
    LANDMARKS: [
      { name: "Fort Kochi Beach", distance: "4.5 Kms" },
      { name: "Marine Drive", distance: "1.2 Kms" },
      { name: "Mattancherry Palace", distance: "5.3 Kms" },
      { name: "Bolgatty Palace", distance: "3.7 Kms" }
    ],
    COLLEGES: [
      { name: "St Theresas College", distance: "3 Kms" },
      { name: "St.Albert's College", distance: "2.3 Kms" },
      { name: "Maharajas College", distance: "3.5 Kms" },
      { name: "Law college", distance: "3 Kms" }
    ],
    HOSPITALS: [
      { name: "Lourdes Hospital", distance: "2.1 Kms" },
      { name: "Medical Trust Hospital", distance: "1.8 Kms" },
      { name: "Ernakulam General Hospital", distance: "3.5 Kms" },
      { name: "Lisie Hospital", distance: "4.2 Kms" }
    ],
    SHOPPING_MALLS: [
      { name: "Lulu Mall", distance: "5.7 Kms" },
      { name: "Centre Square Mall", distance: "2.3 Kms" },
      { name: "Oberon Mall", distance: "6.4 Kms" },
      { name: "Gold Souk Grande", distance: "3.8 Kms" }
    ]
  };

  const tabs = [
    { id: "LANDMARKS", label: "LANDMARKS NEARBY" },
    { id: "COLLEGES", label: "COLLEGES" },
    { id: "HOSPITALS", label: "HOSPITALS" },
    { id: "SHOPPING_MALLS", label: "SHOPPING MALLS" }
  ];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-8">
      {/* Tab Headers */}
      <div className="flex flex-col  sm:flex-row flex-wrap border-b border-cyan-500">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-4 px-6 text-center font-medium transition-colors duration-200 border border-b-0 border-cyan-500 ${
              activeTab === tab.id 
                ? "bg-cyan-500 text-white" 
                : "bg-white text-cyan-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8 border-x border-b border-cyan-500">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 px-8">
          {tabData[activeTab].map((item, index) => (
            <div key={index} className=" flex items-center">
              <div className="text-cyan-500 mr-3">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg">{item.name} - {item.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbySection;