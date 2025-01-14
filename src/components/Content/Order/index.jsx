import {memo, useEffect, useRef, useState} from "react";
import OrderWrapper from "./style";
import OrderContent from "./OrderContent";
import classNames from "classnames";
import SHA256 from "crypto-js/sha256";
import {useNavigate, useSearchParams} from "react-router-dom";
import fetchData from "../../../utils/net";
import {message} from "antd";

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
  const navItems = navData
  const [orderData, setOrderData] = useState([])
  const [l, setL] = useState(0)
  const navigate = useNavigate();
  const lineRef = useRef();
  // 解析URL参数
  const [params] = useSearchParams();
  const query = Object.fromEntries(params);
  const [page, setPage] = useState(Number(query.page))
  const [pageSize, setPageSize] = useState(Number(query.pageSize))
  const [type, setType] = useState(6)

  useEffect(() => {
    let type = Number(query.type)
    let offset
    if (type === 6) {
      offset = 0
    } else {
      offset = type+1
    }
    lineRef.current.style.left = `${offset*8}rem`

  }, [query.type])

  useEffect(() => {
    let url = `order/list?page=${page-1}&pageSize=${pageSize}&type=${type}`
    fetchData("get", {}, url).then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setOrderData(data.orders)
        setL(data.length)
      }
    })
  }, [page, pageSize, type])
  
  function handleNav(e, index, type) {
    setType(type)
    navigate(`/order?page=${page}&pageSize=${pageSize}&type=${type}`)
  }

  return (
      <OrderWrapper>
        <div className="order-nav">
          {
            navItems.map((item, index) => {
              return (
                  <div
                      key={SHA256(item.title + index)}
                      className={classNames("nav-item", {"active": Number(query.type) === item.type})}
                      onClick={(e) => handleNav(e, index, item.type)}
                  >{item.title}</div>
              )
            })
          }
          {/*  下划线*/}
          <div className="line" ref={lineRef}></div>
        </div>
        <div className="order-content">
          <OrderContent
              datas={{orderData, l, page, pageSize, type}}
              methods={{setPage, setPageSize, setL}}
          />
        </div>
      </OrderWrapper>
  )
})

export default Order