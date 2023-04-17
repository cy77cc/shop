import {memo} from "react";
import {InboxOutlined} from "@ant-design/icons";
import shirtPic from "../../../../assets/img/shirt.png"

const OrderInfo = memo(() => {
  return (
      <div className="order-info">
        <div className="order-info-title">
          <div className="icon-box"><InboxOutlined /></div> 待发货
        </div>
        <div className="order-info-content">
          <div className="order-good-info">
            <div className="good-img">
              <img src={shirtPic} alt=""/>
            </div>
            <div className="good-msg">
              <div>花色斑点衬衫</div>
              <div style={{color: "#718096"}}>ID: 088134NT</div>
            </div>
            <div className="good-price">
              <div>￥210.98</div>
              <div style={{color: "#718096"}}>数量: 1</div>
            </div>
          </div>
        </div>
        <div className="order-info-btn">
          <button className="mark-finish">标记为已完成</button>
          <button className="send-now">现在去发货</button>
        </div>
      </div>
  )
})

export default OrderInfo