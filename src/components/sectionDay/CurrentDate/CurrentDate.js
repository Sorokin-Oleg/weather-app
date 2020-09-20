import React from "react";
import { checkZero } from "./../../../function/checkZero";
import { MOUNTHS } from "./../../../const/mounths";

import "./CurrentDate.scss";

const CurrentDate = ({ timezone, currentDate, lang }) => {
  const date = new Date((currentDate + timezone) * 1000);
  const thisDay = lang
    ? MOUNTHS.en[date.getUTCMonth()] + " " + checkZero(date.getUTCDate()) + ", " + date.getUTCFullYear()
    : checkZero(date.getUTCDate()) + " " + MOUNTHS.ru[date.getUTCMonth()] + ", " + date.getUTCFullYear();
  return (
    <div className="container-current-date">
      <span>{thisDay}</span>
    </div>
  );
};

CurrentDate.defaultProps = {
  currentDate: 0,
  timezone: 0,
};

export default CurrentDate;
