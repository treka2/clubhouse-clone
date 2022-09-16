import React from "react";
import style from "../style/roomcard.module.css";
import roomdata from "../data/roomCard.json";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PersonIcon from "@mui/icons-material/Person";
function RoomCard() {
  return (
    <>
      {roomdata.map((room) => {
        return (
          <div key={room.id}>
            <div>
              <div className={style.roomCardContainer}>
                <h6>{room.title}</h6>
                <h2>{room.sub_title} </h2>
                <div className={style.roomMembers}>
                  <div className={style.users_img}>
                    <img src="./imgs/me.jpg" alt="mp" />
                    <img src="./imgs/me.jpg" alt="mp" />
                  </div>
                  <div>
                    {room.members.map((member) => (
                      <p>
                        {member.first_name} {member.last_name}{" "}
                        <TextsmsOutlinedIcon />
                      </p>
                    ))}
                    <p className="d-flex align-items-center">
                      <span className="me-2">{room.watch}</span>
                      <PersonIcon />
                      <span className="mx-2"></span>{" "}
                      <span className="me-2">{room.comment}</span>
                      <TextsmsIcon />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RoomCard;
