import React from "react";
import { Link } from "react-router-dom";
import style from "../style/phone.module.css";
function CodeConfirm() {
  return (
    <div className={style.phoneConfirmation}>
      <Link exact to="/get_username" className={style.bckBtn}>
        &lt;
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginButton: "2em" }}>
          Enter the code you received
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            textAlign: "center",
            margin: "0.3rem 0",
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 5px",
          }}
        />
        <p className="mt-2">
          Didn't receive it ? <span> Tap to resend . </span>
        </p>
      </div>
      <Link exact to="/allow_notification" className="primaryBtn ">
        Next &gt;{" "}
      </Link>
    </div>
  );
}

export default CodeConfirm;
