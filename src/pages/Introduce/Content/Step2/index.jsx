import {memo} from "react";
import Step2Wrapper from "./style";
import {useNavigate, useParams} from "react-router-dom";
import Step2ContentCpn from "../../../../components/IntroCpn/Step2Content";

const Step2Content = memo(() => {
  const navigate = useNavigate();
  const {username} = useParams();
  return (
      <Step2Wrapper>
        <div className="content-box">
          <Step2ContentCpn />
        </div>
        <div className="footer">
          <div className="empty"></div>
          <div className="btn-group">
            <button className="btn-item-left" onClick={() => navigate(`/introduce/${username}/step1`)}>返回</button>
            <button className="btn-item-right" onClick={() => navigate(`/introduce/${username}/step2`)}>继续</button>
          </div>
        </div>
      </Step2Wrapper>
  )
})

export default Step2Content