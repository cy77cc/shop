import {memo} from "react";
import Step2Wrapper from "./style";
import Step2ContentCpn from "../../../../components/IntroCpn/Step2Content";

const Step2Content = memo(() => {
  return (
      <Step2Wrapper>
        <div className="content-box">
          <Step2ContentCpn />
        </div>
      </Step2Wrapper>
  )
})

export default Step2Content