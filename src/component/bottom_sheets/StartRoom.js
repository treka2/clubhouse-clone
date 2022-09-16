import React, { useState } from "react";
import style from "../../style/bottomsheet.module.css";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
function StartRoom(props) {
  const [room, setRoom] = useState("open");
  return (
    <>
      <div className={style.switch_line}></div>
      <div className="text-right">
        <button className={style.addTobicBtn}>+add a tobic</button>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room === "open" ? style.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <PublicTwoToneIcon />
          </div>
          open
        </button>
        <button
          className={room === "social" ? style.active : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <PublicTwoToneIcon />
          </div>
          Social
        </button>
        <button
          className={room === "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <PublicTwoToneIcon />
          </div>
          closed
        </button>
      </div>
      <p>
        start a room
        <span>
          {room === "closed"
            ? " for people i choose"
            : room === "social"
            ? " with people i follow"
            : " open to every one"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisable(true);
          }}
        >
          Let's go
        </button>
      </div>
    </>
  );
}

export default StartRoom;
