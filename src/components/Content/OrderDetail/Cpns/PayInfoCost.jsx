import {memo} from "react";

const PayInfoCost = memo(() => {
  return (
      <>
        <div className="pay-cost-item">
          <div className="item-left">小计</div>
          <div className="item-middle">1 项目</div>
          <div className="item-right">￥210.98</div>
        </div>
        <div className="pay-cost-item">
          <div className="item-left">物流</div>
          <div className="item-middle">中通快递 (1.00 kg)</div>
          <div className="item-right">￥10.00</div>
        </div>
        <div className="pay-cost-item">
          <div className="item-left">优惠</div>
          <div className="item-middle">满100-10</div>
          <div className="item-right">-￥10.00</div>
        </div>
        <div className="pay-cost-item"
             style={{color: "#111827"}}>
          <div className="item-left">总计</div>
          <div className="item-middle"></div>
          <div className="item-right">￥210.98</div>
        </div>
      </>
  )
})

export default PayInfoCost