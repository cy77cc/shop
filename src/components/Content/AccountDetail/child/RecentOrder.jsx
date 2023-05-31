import {memo} from "react";

const RecentOrder = memo(() => {
  return (
      <div className="recent-order">
        <div className="title">最近订单</div>
        <div className="order-content">
          <div className="order-item item-1">
            <div className="good-img mr-75">
              <img src="http://117.50.184.147/man/man-4.png" alt=""/>
            </div>
            <div className="good-message">
              <div>#312790 - 花色斑点衬衫</div>
              <div>
                <span className="mr-75" style={{color: "#FE964A"}}>￥210.98</span>
                <span style={{color: "#718096"}}>2022.11.24 07:00:00</span>
              </div>
            </div>
            <div className="order-status">
              <div className="status-btn">已完成</div>
              <div className="status-text">数量1</div>
            </div>
          </div>
          <div className="order-item">
            <div className="good-img mr-75">
              <img src="http://117.50.184.147/man/man-4.png" alt=""/>
            </div>
            <div className="good-message">
              <div>#312790 - 花色斑点衬衫</div>
              <div>
                <span className="mr-75" style={{color: "#FE964A"}}>￥210.98</span>
                <span style={{color: "#718096"}}>2022.11.24 07:00:00</span>
              </div>
            </div>
            <div className="order-status">
              <div className="status-btn">已完成</div>
              <div className="status-text">数量1</div>
            </div>
          </div>
        </div>
      </div>
  )
})

export default RecentOrder