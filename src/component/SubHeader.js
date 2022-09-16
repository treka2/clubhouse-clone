import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "../style/explore.module.css";
function SubHeader(props) {
  return (
    <div className={style.head}>
      <Link to="/home">
        <ArrowBackIosIcon />
      </Link>
      <h3 className="text-center m-auto text-muted">{props.pageTitle}</h3>
    </div>
  );
}

export default SubHeader;
