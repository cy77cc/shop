import {memo} from "react";
import {EllipsisOutlined} from "@ant-design/icons";
import dressPic from "../../../assets/img/dress.png"
import overcoatPic from "../../../assets/img/overcoat.png"
import shirtPic from "../../../assets/img/shirt.png"
import SHA256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";

const orders = [
  {
    title: "黑色连衣裙",
    img: dressPic,
    price: 400.98,
    saleTime: "2022,9,29",
  }, {
    title: "黄色大衣",
    img: overcoatPic,
    price: 550.75,
    saleTime: "2022,9,29",
  }, {
    title: "花色衬衫",
    img: shirtPic,
    price: 210.98,
    saleTime: "2022,9,29",
  }
]

const History = memo(() => {
  const navigate = useNavigate();
  return (
      <>
        <div className="history-order-title">
          <div className="title-item">历史订单</div>
          <div className="title-item more" onClick={() => {
          navigate("/order")
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
                        <span className="price">￥{item.price}</span>
                        <span className="time">{item.saleTime}</span>
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