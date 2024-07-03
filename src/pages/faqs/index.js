import React, { useState } from 'react';
const FAQS = () => {
  const [openTab, setOpenTab] = useState(null);

  // Toggle accordion item
  const toggleItem = (index) => {
    if (openTab === index) {
      setOpenTab(null); // Close the tab if it's already open
    } else {
      setOpenTab(index); // Open the tab
    }
  };

  return (
    <section className="py100">
      <div className="container">
        <div className="w-full">
          <h2 className="fs50 font-bold text-center secondaryClr">Frequently asked Questions</h2>
          <ul className="flex flex-col">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="bg-white my-2 shadow-lg">
                <h2
                  onClick={() => toggleItem(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                >
                  <span>FAQ Question {index + 1}</span>
                  <svg
                    className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${openTab === index ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                {openTab === index && (
                  <div
                    className="border-l-2 border-purple-600 overflow-hidden transition-all"
                    style={{ maxHeight: '500px', transition: 'max-height 0.5s ease-in-out' }}
                  >
                    <p className="p-3 text-gray-900">
                      Answer to FAQ question {index + 1}.
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQS
