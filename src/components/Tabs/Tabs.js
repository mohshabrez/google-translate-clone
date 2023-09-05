import React, { useState } from 'react';
import './Tabs.css'; // Create a CSS file for styling
import LanguageDropdown from '../LanguageDropDown/LanguageDropdown';


function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [targetLanguage, setTargetLanguage] = useState("en");

  const tabs = ['Detect', 'English', 'French'];

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active-tab' : ''}`}
            onClick={() => changeTab(index)}
          >
            <p>{tab}</p>
          </div>
        ))}
      </div>

      {/* <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TabComponent;
