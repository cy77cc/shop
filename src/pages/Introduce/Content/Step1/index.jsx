import {memo} from "react";
import Step1Wrapper from "./style";
import {useNavigate, useParams} from "react-router-dom";
import Step1ContentCpn from "../../../../components/IntroCpn/Step1Content";

const Step1Content = memo(() => {
  const navigate = useNavigate();
  const {username} = useParams();
  return (
      <Step1Wrapper>
        <div className="content-box">
          <Step1ContentCpn />
        </div>
        <div className="footer">
          <div className="empty"></div>
          <div className="btn-group">
            <button className="btn-item-left" onClick={() => navigate(`/introduce/${username}/step2`)}>跳过</button>
            <button className="btn-item-right" onClick={() => navigate(`/introduce/${username}/step2`)}>继续</button>
          </div>
        </div>
      </Step1Wrapper>
  )
})

export default Step1Content