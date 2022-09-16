import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import style from "../style/header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <Link exact to="/explore">
        <span>
          <SearchIcon />
        </span>
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <span>
            <MailOutlineIcon />
          </span>
        </Link>

        <Link exact to="/upcoming">
          <span>
            <CalendarMonthIcon />
          </span>
        </Link>

        <Link exact to="/activity">
          <span>
            <NotificationsIcon />
          </span>
        </Link>

        <Link exact to="/profile">
          <span>
            <img src="./imgs/me.jpg" alt="me" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
