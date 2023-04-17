import {memo} from "react";
import Step1Wrapper from "./style";
import Step1ContentCpn from "../../../../components/IntroCpn/Step1Content";

const Step1Content = memo(() => {
  return (
      <Step1Wrapper>
        <div className="content-box">
          <Step1ContentCpn/>
        </div>
      </Step1Wrapper>
  )
})

export default Step1Content