import {memo} from "react";
import RegisterWrapper from "./style";
import RegisterHeader from "../../components/ReisterCpn/Header";
import RegisterContent from "../../components/ReisterCpn/Content";

const Register = memo(() => {
  return (
      <RegisterWrapper>
        <div className="register-header">
          <RegisterHeader/>
        </div>
        <div className="register-content">
          <RegisterContent />
        </div>
      </RegisterWrapper>
  )
})

export default Register