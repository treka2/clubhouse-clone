import React from "react";
import data from "../data/dailyCard.json";
import style from "../style/dailycard.module.css";
function DailyInfoCard() {
  return (
    <div className={style.card}>
      {data.map((item, id) => (
        <div key={id}>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p> {item.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyInfoCard;
