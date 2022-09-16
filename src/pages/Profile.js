import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to="/home">
              <ArrowBackIosIcon />
            </Link>
            <div className={style.actionBtn}>
              <AlternateEmailIcon />
              <FileUploadOutlinedIcon />
              <SettingsOutlinedIcon />
            </div>
          </div>
        </div>
        <img src="/imgs/me.jpg" alt="me" className={style.profile_image} />
        <h4>mo salama</h4>
        <p>@trekka</p>
        <div className={style.follow}>
          <p>
            <span>0</span> Followers
          </p>
          <p>
            <span>18</span> Following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <TwitterIcon />
            Add Twitter
          </button>
          <button className="mb-0">
            <InstagramIcon />
            Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/imgs/me.jpg" alt="me" className={style.profile_image} />
          <div>
            <p>Joined 20-march-2022</p>
            <p>
              Nominated by <span>abdelghafour elboraey</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <AddIcon />
        </button>
      </div>
    </>
  );
}

export default Profile;
