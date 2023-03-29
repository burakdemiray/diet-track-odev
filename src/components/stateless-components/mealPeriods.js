import React from 'react';

export default function mealPeriods(props) {
  return (
    <div className="meal-periods">
      <div className="meal-period">
        <span className="meal-period__title">
          {Math.round(props.breakfast)}
        </span>
        <br />
        <small className="calories-small-font">kahvaltı</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.lunch)}</span>
        <br />
        <small className="calories-small-font">öğle yemeği</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.dinner)}</span>
        <br />
        <small className="calories-small-font">akşam yemeği</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.snack)}</span>
        <br />
        <small className="calories-small-font">atıştırmalıklar</small>
      </div>
    </div>
  );
}
