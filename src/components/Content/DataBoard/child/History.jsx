import {memo, useEffect, useState} from "react";
import {EllipsisOutlined} from "@ant-design/icons";
import SHA256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";
import fetchData from "../../../../utils/net";
import {message} from "antd";
import dayjs from "dayjs";

const History = memo(() => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchData("get", {}, "data/history/order")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setOrders(data.orders)
          }
        })
  }, [])

  return (
      <>
        <div className="history-order-title">
          <div className="title-item">历史订单</div>
          <div className="title-item more" onClick={() => {
          navigate("/order?page=1&pageSize=10&type=6")
          }
          }><EllipsisOutlined/></div>
        </div>
        <div className="history-order-content">
          {
            orders.map((item, index) => {
              return (
                  <div className="history-order-item" key={SHA256(item.title + index)}>
                    <div className="item-img">
                      <img src={item.img} alt=""/>
                    </div>
                    <div className="item-detail">
                      <div className="detail-title">{item.title}</div>
                      <div className="detail-content">
                        <span className="price">￥{item.price.toFixed(2)}</span>
                        <span className="time">{dayjs(item.saleTime).utc().format("YYYY,MM,DD")}</span>
                      </div>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </>
  )
})
export default History