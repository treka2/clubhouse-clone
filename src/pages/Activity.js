import React from "react";
import SubHeader from "../component/SubHeader";
import data from "../data/activity.json";
import style from "../style/activity.module.css";
function Activity() {
  return (
    <>
      <SubHeader pageTitle="Activity" />
      <div className={style.activityContainer}>
        <div>
          {data.map((item) => (
            <div className={style.acticityNotification} key={item.id}>
              <img src={`/imgs/${item.image[0]}`} alt="me" />
              <p>
                <span>{item.title}</span>
                {item.description}
              </p>
              <span className={style.date}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Activity;
