import React from "react";
import style from "../style/bottomsheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";
function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisable}
      onChange={() => {
        props.setSheetVisable(!props.sheetVisable);
        props.setItemVisable(true);
      }}
      fullScreen={props.sheetTitle === "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        {props.sheetTitle === "new room" ? (
          <NewRoom
            cardDetail={props.cardDetail}
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisable={(item) => {
              props.setSheetVisable(item);
              props.setItemsVisable(true);
            }}
          />
        ) : props.sheetTitle === "start room" ? (
          <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisable={(item) => {
              props.setSheetVisable(item);
              props.setItemsVisable(true);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
