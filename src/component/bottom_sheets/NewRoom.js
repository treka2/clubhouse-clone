import React, { useState } from "react";
import style from "../../style/roomdetail.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import MicOffIcon from "@mui/icons-material/MicOff";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import PanToolIcon from "@mui/icons-material/PanTool";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
function NewRoom(props) {
  const [micMuteVIsable, setMicMuteVisable] = useState(false);
  // const [itemsVisable, setItemsVisable] = useState(true);

  const card = props.cardDetail;
  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className={"d-flex align-items-center"}>
            <a
              href="#back"
              onClick={() => {
                props.setSheetVisable(false);
              }}
            >
              <KeyboardArrowDownIcon />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <ContentPasteIcon />
            <img src="/imgs/me.jpg" alt="me" className={style.profile_img} />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div className={style.memberContainer}>
                {micMuteVIsable ? (
                  <div className={style.audio_icon}>
                    <MicOffIcon />
                  </div>
                ) : (
                  ""
                )}
                <img src="/imgs/me.jpg" alt="me" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button
            onClick={() => {
              props.setSheetVisable(false);
            }}
          >
            <EmojiPeopleIcon />
            Leave quietly
          </button>
          <div>
            <button>
              <AddIcon />
            </button>
            <button>
              <PanToolIcon />
            </button>
            <button onClick={() => setMicMuteVisable(!micMuteVIsable)}>
              {micMuteVIsable ? <MicIcon /> : <MicOffIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRoom;
