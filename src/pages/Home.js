import React, { useState } from "react";
import DailyInfoCard from "../component/DailyInfoCard";
import Header from "../component/Header";
import RoomCard from "../component/RoomCard";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import data from "../data/roomCard.json";
import BottomSheet from "../component/BottomSheet";
import style from "../style/home.module.css";
import newRoomData from "../data/NewRoom.json";
function Home() {
  const [itemsVisable, setItemsVisable] = useState(true);
  const [sheetVisable, setSheetVisable] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loadVisabilty, setLoadVisabilty] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loadVisabilty ? (
        <div className={style.loader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisable(true)}>
          <AddOutlinedIcon className="me-2" /> start a room
        </button>
        <button>
          <GrainOutlinedIcon />
        </button>
      </div>
      <BottomSheet
        sheetTitle="start room"
        setSheetVisable={(item) => setSheetVisable(item)}
        sheetVisable={sheetVisable}
        cardDetail={data.find((item) => item.id === cardId)}
        setItemsVisable={(item) => setItemsVisable(item)}
        setSheetCreateRoom={(item) => {
          setLoadVisabilty(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoadVisabilty(false);
          }, 2000);
        }}
      />
      <BottomSheet
        sheetTitle="new room"
        setSheetVisable={(item) => setSheetCreateRoom(item)}
        sheetVisable={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisable={(item) => setItemsVisable(item)}
      />
    </>
  );
}

export default Home;
