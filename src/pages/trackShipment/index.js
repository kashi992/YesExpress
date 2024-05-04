import React from 'react';
import './index.scss'

const TrackShipment = () => {
  return (
    <div className="order-tracking-section">
        <div className="section-content">
            <div className="order-details d-flex justify-content-between container">
                <div className="order-status-section">
                    <h5 className="mt-2 text-light-2">SHIPMENT STATUS</h5>
                    <p className="text-primary">Invoice # <span id="userOrderNum"></span></p>

                    <span className="status-more-details-btn inline-flex md:hidden button button-secondary">
                        More details
                        <i className="fas fa-chevron-right"></i>
                    </span>

                    <div className="order-track-status">
                        <div className="status-header flex md:hidden items-center justify-center">
                            <span className="status-back-btn">
                                <i className="fas fa-chevron-left"></i>
                            </span>
                            <h4 className="text-center">Order status</h4>
                        </div>
                        <div className="status-tree">
                            <div className="status-tree-item active" id="item_status_1">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="scribble">
                                            <path id="Vector 2176" d="M2.39999 7.99996C4.79999 3.19999 11.68 0.799908 10.4 3.99991C8.79999 7.99991 -0.800006 15.1999 4.79999 17.5999C6.94921 18.521 9.68761 18.3194 12.2464 17.5189M12.2464 17.5189C16.3547 16.2336 20 13.4045 20 11.1999C20 7.2 14.4 8.8 12.8 14.4C12.4697 15.556 12.2758 16.6097 12.2464 17.5189ZM12.2464 17.5189C12.1333 21.0143 14.4514 22.3743 20.8 19.2" stroke="currentColor" strokeOpacity="0.7"/>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <div className="item-title">
                                        <p className="fs-14">Shipment Picked</p>
                                    </div>
                                    <div className="item-status d-flex align-items-center gap-1">
                                        <span className="status-icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <p className="fs-14 userOrderProgress">Waiting to start</p>
                                    </div>
                                </div>
                            </div>
                            <div className="status-tree-item active" id="item_status_2">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="streamline:interface-edit-pathfinder-divide-pathfinder-divide-work" clipPath="url(#clip-0_185_259)">
                                            <path id="Vector" d="M0.857147 14.5714C0.857147 15.0261 1.03776 15.4621 1.35925 15.7836C1.68074 16.1051 2.11678 16.2857 2.57143 16.2857M2.57143 0.85714C2.11678 0.85714 1.68074 1.03775 1.35925 1.35924C1.03776 1.68073 0.857147 2.11677 0.857147 2.57143M16.2857 2.57143C16.2857 2.11677 16.1051 1.68073 15.7836 1.35924C15.4621 1.03775 15.0261 0.85714 14.5714 0.85714M6.85715 0.85714H10.2857M0.857147 6.85714V10.2857M16.2857 7.71428H21.4286C21.8832 7.71428 22.3193 7.89489 22.6408 8.21639C22.9622 8.53788 23.1429 8.97391 23.1429 9.42857V21.4286C23.1429 21.8832 22.9622 22.3193 22.6408 22.6408C22.3193 22.9622 21.8832 23.1429 21.4286 23.1429H9.42858C8.97392 23.1429 8.53788 22.9622 8.21639 22.6408C7.8949 22.3193 7.71429 21.8832 7.71429 21.4286V16.2857H14.5714C15.0261 16.2857 15.4621 16.1051 15.7836 15.7836C16.1051 15.4621 16.2857 15.0261 16.2857 14.5714V7.71428Z" stroke="currentColor" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip-0_185_259">
                                                <rect width="24" height="24" fill="currentColor"/>
                                            </clipPath>
                                        </defs>
                                    </svg>                                        
                                </div>
                                <div>
                                    <div className="item-title">
                                        <p className="fs-14">Reached Facilty center</p>
                                    </div>
                                    <div className="item-status d-flex align-items-center gap-1">
                                        <span className="status-icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <p className="fs-14 userOrderProgress">Waiting to start</p>
                                    </div>
                                </div>
                            </div>
                            <div className="status-tree-item" id="item_status_3">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="paintbrush">
                                            <path id="Vector" d="M12 7.2L16.8 12M0.799999 22.4L2.35395 16.9241C2.85455 15.1601 4.46539 13.9428 6.29908 13.9428H6.4C8.60914 13.9428 10.4 15.7336 10.4 17.9428V18.0274C10.4 20.1898 8.64701 21.9428 6.48459 21.9428H6.35689C5.85858 21.9428 5.36654 21.8316 4.91663 21.6174C3.85196 21.1104 2.59918 21.2006 1.61803 21.8547L0.799999 22.4ZM8 9.6L14.4 16L23.2 0.800003L8 9.6Z" stroke="currentColor" strokeOpacity="0.7" strokeLinejoin="round"/>
                                        </g>
                                    </svg>                                        
                                </div>
                                <div>
                                    <div className="item-title">
                                        <p className="fs-14">Shipping</p>
                                    </div>
                                    <div className="item-status d-flex align-items-center gap-1">
                                        <span className="status-icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <p className="fs-14 userOrderProgress">Waiting to start</p>
                                    </div>
                                </div>
                            </div>
                            <div className="status-tree-item" id="item_status_4">
                                <div className="item-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="streamline:shipping-box-2-box-package-label-delivery-shipment-shipping-3d" clipPath="url(#clip-0_185_266)">
                                            <g id="Group">
                                                <path id="Vector" d="M9.99999 0.714287V6.42857M12.1429 15.7143H15.7143M0.714279 6.42857H19.2857V17.8571C19.2857 18.236 19.1352 18.5994 18.8673 18.8673C18.5994 19.1352 18.236 19.2857 17.8571 19.2857H2.14285C1.76397 19.2857 1.40061 19.1352 1.1327 18.8673C0.864789 18.5994 0.714279 18.236 0.714279 17.8571V6.42857Z" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path id="Vector_2" d="M0.714279 6.42857L2.85714 2.3C3.08815 1.83467 3.44166 1.44114 3.87965 1.16174C4.31763 0.882333 4.82351 0.727636 5.34285 0.714287H14.6571C15.1887 0.714569 15.7096 0.863127 16.1614 1.14326C16.6131 1.42339 16.9777 1.82398 17.2143 2.3L19.2857 6.42857" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip-0_185_266">
                                                <rect width="20" height="20" fill="currentColor"/>
                                            </clipPath>
                                        </defs>
                                    </svg>                                        
                                </div>
                                <div>
                                    <div className="item-title">
                                        <p className="fs-14">Out for Delivery</p>
                                    </div>
                                    <div className="item-status d-flex align-items-center gap-1">
                                        <span className="status-icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <p className="fs-14 userOrderProgress">Waiting to start</p>
                                    </div>
                                </div>
                            </div>
                            <div className="status-tree-item" id="item_status_5">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="la:shipping-fast">
                                            <path id="Vector" d="M0 4.5V6H14.25V17.25H9.633C9.2985 15.9607 8.139 15 6.75 15C5.361 15 4.2015 15.9607 3.867 17.25H3V13.5H1.5V18.75H3.867C4.2015 20.0393 5.361 21 6.75 21C8.139 21 9.2985 20.0393 9.633 18.75H15.867C16.2015 20.0393 17.361 21 18.75 21C20.139 21 21.2985 20.0393 21.633 18.75H24V12.633L23.9528 12.5153L22.4528 8.01525L22.29 7.5H15.75V4.5H0ZM0.75 7.5V9H7.5V7.5H0.75ZM15.75 9H21.2108L22.5 12.8438V17.25H21.633C21.2985 15.9607 20.139 15 18.75 15C17.361 15 16.2015 15.9607 15.867 17.25H15.75V9ZM1.5 10.5V12H6V10.5H1.5ZM6.75 16.5C7.58775 16.5 8.25 17.1622 8.25 18C8.25 18.8378 7.58775 19.5 6.75 19.5C5.91225 19.5 5.25 18.8378 5.25 18C5.25 17.1622 5.91225 16.5 6.75 16.5ZM18.75 16.5C19.5877 16.5 20.25 17.1622 20.25 18C20.25 18.8378 19.5877 19.5 18.75 19.5C17.9123 19.5 17.25 18.8378 17.25 18C17.25 17.1622 17.9123 16.5 18.75 16.5Z" fill="currentColor" fillOpacity="0.7"/>
                                        </g>
                                    </svg>                                        
                                </div>
                                <div>
                                    <div className="item-title">
                                        <p className="fs-14">Delivered</p>
                                    </div>
                                    <div className="item-status d-flex align-items-center gap-1">
                                        <span className="status-icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <p className="fs-14 userOrderProgress">Waiting to start</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackShipment