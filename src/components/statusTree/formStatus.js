import React, { useState, useEffect } from 'react';
import './index.scss';

const StatusTree = ({ activeStep }) => {
  const getStatusItems = (activeStep) => [
    { id: 'item_status_1', title: 'Destination', icon: 'fas fa-map-marker', active: activeStep > 0, completed: activeStep > 1 },
    { id: 'item_status_2', title: 'Receiver Information', icon: 'fas fa-clipboard-list', active: activeStep > 1, completed: activeStep > 2 },
    { id: 'item_status_3', title: 'Sender Information', icon: 'fas fa-envelope-open-text', active: activeStep > 2, completed: activeStep > 3 },
    { id: 'item_status_4', title: 'Product Description', icon: 'fas fa-box-open', active: activeStep > 3, completed: activeStep > 4 },
    { id: 'item_status_5', title: 'Delivery Info', icon: 'fas fa-exclamation', active: activeStep > 4, completed: activeStep > 5 }
  ];

  const [statusItems, setStatusItems] = useState(getStatusItems(activeStep));

  useEffect(() => {
    setStatusItems(getStatusItems(activeStep));
  }, [activeStep]);

  return (
    <div className="steps-status-section form-steps mb-4">
      <div className="order-details">
        <div className="form-steps-status">
          <div className="status-tree">
            {statusItems.map(item => (
              <div key={item.id} className={`status-tree-item ${item.active ? 'active' : ''} ${item.completed ? 'completed' : ''}`} id={item.id}>
                <div className="item-icon">
                  {item.completed ? 
                    <i className="fas fa-check"></i>
                    : 
                    <i className={item.icon}></i>
                  }
                </div>
                <div>
                  <div className="item-title">
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTree;
