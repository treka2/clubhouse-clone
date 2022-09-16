import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import style from "../style/phone.module.css";
import { Link } from "react-router-dom";
function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmation}>
      <Link exact to="/" className={style.bckBtn}>
        &lt;
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        className={style.phoneInput}
        international
        defaultCountry="EG"
        placeholder="Enter your phone number"
        value={value}
        onChange={setValue}
      />
      <p style={{ marginBottom: "0.4rem" }}>
        By entering your number , you're agreeing to
        <span>Terms of Service and Privacy Policy</span> . Thanks !
      </p>
      <Link exact to="/code_confirm" className="primaryBtn ">
        Next &gt;{" "}
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
