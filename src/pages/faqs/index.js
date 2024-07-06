import React, { useState } from 'react';

const dataArr = [
  {
    title: "What types of shipments do you handle?",
    detail: "We handle various types of shipments including parcels, documents, packages, and special items that require careful handling."
  },
  {
    title: "What are your shipping destinations?",
    detail: "We specialize in shipping services between Australia and Pakistan, providing reliable delivery solutions for both domestic and international destinations."
  },
  {
    title: "How can I book a shipment?",
    detail: "Booking a shipment is easy through our online platform. Simply provide details such as shipment size, weight, and destination to get started."
  },
  {
    title: "How do I track my shipment?",
    detail: "You can track your shipment in real-time using our online tracking tool. Enter your tracking number on our website to monitor the status and expected delivery time."
  },
  {
    title: "What are your shipping rates and how are they calculated?",
    detail: "Shipping rates are calculated based on factors like shipment size, weight, destination, and chosen delivery speed. For a personalized quote, use our online quote tool or contact our team."
  },
  {
    title: "Do you offer express or expedited shipping options?",
    detail: "Yes, we offer express and expedited shipping services for urgent deliveries. Choose the speed that meets your timeline and budget requirements during the booking process."
  },
  {
    title: "How do you ensure the safety and security of my shipment?",
    detail: "We prioritize the safety and security of every shipment with robust packaging guidelines and tracking systems. Our team follows strict protocols to safeguard your items during transit."
  },
]
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
    <section className="py100 primaryClrBg">
      <div className="container">
        <div className="xl:w-3/4 w-full mx-auto">
          <h2 className="fs50 font-bold text-center secondaryClr lg:mb-8 mb-4">Frequently asked Questions</h2>
          <ul className="flex flex-col">
            {
              dataArr.map((data, index) => (
                <li key={index} className="bg-white my-2 shadow-lg">
                  <h2
                    onClick={() => toggleItem(index)}
                    className="fs20 flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                  >
                    <span>{data.title}</span>
                    <svg
                      className={`fill-current secondaryClr h-6 w-6 transform transition-transform duration-500 ${openTab === index ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </h2>
                  <div
                      className={`border-l-2 border-purple-600 overflow-hidden transition-all ease-in-out duration-500 ${openTab === index ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                      <p className="xl:p-3 p-3 pt-2 secondaryClr fs18">
                        {data.detail}
                      </p>
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQS
