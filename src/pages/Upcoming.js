import React from "react";
import SubHeader from "../component/SubHeader";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import upcomingInfo from "../data/upcomingCard.json";
import style from "../style/upcoming.module.css";
function Upcoming() {
  // const [sheetVisable, setSheetVisable] = React.useState(false);

  return (
    <>
      <SubHeader pageTitle="upcoming for you" />
      <div className={style.upcomingContainer}>
        <h4>Today</h4>
        {upcomingInfo.map((item) => (
          <div className={style.upcomingCard} key={item.id}>
            <NotificationsNoneIcon className={style.alarmIcon} />
            <span>{item.time}</span>
            <h5>{item.title}</h5>
            {item.images.map((img) => (
              <img
                src={`/imgs/${img}`}
                alt="me"
                className={style.upcomingCard_img}
              />
            ))}
            <p>{item.description}</p>
          </div>
        ))}
        {/* <button onClick={() => setSheetVisable(true)}>start a room</button> */}
      </div>
    </>
  );
}

export default Upcoming;
