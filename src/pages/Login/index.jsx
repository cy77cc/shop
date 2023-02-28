import React, { memo } from "react";
import LoginContent from "../../components/LoginCpn/Content";
import LoginHeader from "../../components/LoginCpn/Header";
import LoginWrapper from "./style";

const index = memo(() => {
  return (
    <LoginWrapper>
      <div className="login-header">
        <LoginHeader />
      </div>
      <div className="login-content">
        <LoginContent />
      </div>
    </LoginWrapper>
  );
});

export default index;
