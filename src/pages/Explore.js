import React from "react";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import data from "../data/Explore.json";
import style from "../style/explore.module.css";
import SubHeader from "../component/SubHeader";
function Explore() {
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="Explore" />
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            border: "none",
            padding: "0.3em 1em",
            boxShadow: "none",
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          disableUnderline={true}
          fullWidth={true}
          placeholder="Find people and clubs"
        ></Input>
      </div>
      <h6 className="text-muted">PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {data.people.map((person) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/imgs/me.jpg" alt="me" />
              <div className="me-2">
                <h5>{person.title}</h5>
                <p>{person.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          show more people <KeyboardArrowDownOutlinedIcon />
        </button>
      </div>
      <h6>FIND CONVERSATION ABOUT ...</h6>
      <div className="row mx-0">
        {data.conversation.map((convers) => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <LocalFireDepartmentOutlinedIcon />
                {convers.title}
              </h6>
              <p>{convers.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
