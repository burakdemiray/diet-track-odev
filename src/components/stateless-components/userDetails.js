import React from 'react';

export default function userDetails() {
  return (
    <div className="user">
      <div className="order-item user__avatar"></div>
      <div className="order-item user__name">
        Burak <span className="surname">Demiray</span>
      </div>
      <div className="order-item user__weight">
        <h2>90</h2>kg
      </div>
      <div className="order-item user__height">
        <h2>197</h2>cm
      </div>
    </div>
  );
}
