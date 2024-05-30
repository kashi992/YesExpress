import React, { useState, useEffect } from 'react';
import './index.scss';

const InvoiceStatusTree = ({ activeStep}) => {
  const getStatusItems = (activeStep) => [
    { id: 'item_status_1', title: 'Shipment Booked', icon: 'fas fa-boxes-packing', active: activeStep >= 1, completed: activeStep > 1 },
    { id: 'item_status_2', title: 'Payment Verification', icon: 'fas fa-money-bill-1', active: activeStep >= 2, completed: activeStep > 2 },
    { id: 'item_status_3', title: 'Package Received', icon: 'fas fa-box-archive', active: activeStep >= 3, completed: activeStep > 3 },
    { id: 'item_status_4', title: 'Shipping', icon: 'fas fa-ship', active: activeStep >= 5, completed: activeStep > 5 },
    { id: 'item_status_5', title: 'Reached Destination Country', icon: 'fas fa-map-location-dot', active: activeStep >= 6, completed: activeStep > 6 },
    { id: 'item_status_6', title: 'Delivered', icon: 'fas fa-truck-ramp-box', active: activeStep >= 8, completed: activeStep > 8 },
  ];

  const [statusItems, setStatusItems] = useState(getStatusItems(activeStep));

  useEffect(() => {
    setStatusItems(getStatusItems(activeStep));
  }, [activeStep]);

  return (
    <div className="order-tracking-section">
      <div className="section-content">
        <div className="order-details flex justify-between">
          <div className="order-status-section">
            <span className="status-more-details-btn inline-flex md:hidden button button-secondary">
              More details
              <i className="fas fa-chevron-right"></i>
            </span>

            <div className="order-track-status">
              <div className="status-header flex md:hidden items-center justify-center">
                <span className="status-back-btn">
                  <i className="fas fa-chevron-left"></i>
                </span>
                <h4 className="text-center">Shipment status</h4>
              </div>
              <div className="status-tree">
                {statusItems.map(item => (
                  <div key={item.id} className={`status-tree-item ${item.active ? 'active' : ''} ${item.completed ? 'completed' : ''}`} id={item.id}>
                    <div className="item-icon">
                      {item.completed ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className={item.icon}></i>
                      )}
                    </div>
                    <div>
                      <div className="item-title">
                        <p className="fs-14">{item.title}</p>
                      </div>
                      <div className="item-status flex items-center gap-1">
                        <span className="status-icon">
                          <i className="fas fa-check"></i>
                        </span>
                        <p className="fs-14 userOrderProgress">
                            {item.completed ? 'Completed' : (item.active ? 'In Process' : 'Waiting to start')}
                        </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceStatusTree;
