import React, { memo } from "react";
import bannerpic from "../../../assets/img/Banner.png";
const LoginBanner = memo(() => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      width: "100%",
    }}>
      <img src={bannerpic} alt="" />
    </div>
  );
});

export default LoginBanner;
