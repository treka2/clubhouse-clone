import React from "react";
import { Link } from "react-router-dom";
import style from "../style/phone.module.css";
function AllowNotification() {
  return (
    <div className={style.phoneConfirmation}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step !</h1>
        <h1 className="mb-3">
          Enable notification to know when people are talking
        </h1>
        <div className={style.notificationContainer}>
          <div className="p-3 ">
            <h3>" Clubhouse " Would Liketo Send You Notifications</h3>
            <p className=" m-auto">
              Notifications may include alerts , sounds , and icon badges
            </p>
          </div>
          <div className={style.action_btn}>
            <Link exact to="/home">
              Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
