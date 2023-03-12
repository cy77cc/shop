import {memo, useRef, useState} from "react";
import OrderWrapper from "./style";
import OrderContent from "./OrderContent";
import classNames from "classnames";
import SHA256 from "crypto-js/sha256";
import data from "./data"

const navData = [
  {
    title: "全部订单",
    isActive: true,
    type: 6,
  },
  {
    title: "待付款",
    isActive: false,
    type: 0,
  },
  {
    title: "待发货",
    isActive: false,
    type: 1,
  },
  {
    title: "已发货",
    isActive: false,
    type: 2,
  },
  {
    title: "退款中",
    isActive: false,
    type: 3,
  },
  {
    title: "已完成",
    isActive: false,
    type: 4,
  }, {
    title: "已取消",
    isActive: false,
    type: 5
  }
]

const Order = memo(() => {
  const [navItems, setNavItems] = useState(navData)
  const [orderData, setOrderData] = useState(data)
  const lineRef = useRef();

  function handleNav(e, index, type) {
    const newArr = navItems
    for (let i = 0; i < newArr.length; i++) {
      newArr[i].isActive = false
    }
    newArr[index].isActive = true
    // console.log(lineRef.current)
    lineRef.current.style.left = `${index * 8}rem`
    setNavItems([...newArr])
    if (type !== 6) {
      const result = data.filter(v => v.status === type)
      setOrderData([...result])
    } else {
      setOrderData(data)
    }
  }

  return (
      <OrderWrapper>
        <div className="order-nav">
          {
            navItems.map((item, index) => {
              return (
                  <div
                      key={SHA256(item.title + index)}
                      className={classNames("nav-item", {"active": item.isActive})}
                      onClick={(e) => handleNav(e, index, item.type)}
                  >{item.title}</div>
              )
            })
          }
          {/*  下划线*/}
          <div className="line" ref={lineRef}></div>
        </div>
        <div className="order-content">
          <OrderContent data={orderData}/>
        </div>
      </OrderWrapper>
  )
})

export default Order