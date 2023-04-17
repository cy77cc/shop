import {memo} from "react";
import {PaidIcon} from "../../../IconSvg";
import PayInfoCost from "./PayInfoCost";

const PayInfo = memo(() => {
  return (
      <div className="pay-info">
        <div className="pay-info-title">
          <PaidIcon/>
          <span style={{marginLeft: "1rem"}}>已支付</span>
        </div>
        <div className="pay-info-cost">
          <PayInfoCost/>
        </div>
        <div className="pay-info-total">
          <div style={{color: "#718096"}}>买家已支付</div>
          <div>￥210.98</div>
        </div>
      </div>
  )
})

export default PayInfo