import {memo, useContext, useEffect, useState} from "react";
import {Input, DatePicker, Pagination} from "antd";
import {CloudDownloadOutlined, SearchOutlined} from "@ant-design/icons";
import SHA256 from "crypto-js/sha256"
import utc from "dayjs/plugin/utc"
import dayjs from "dayjs";
import StatusBox from "./StatusBox";
import {useNavigate, useSearchParams} from "react-router-dom";
import {PayStatusContext, StatusContext} from "../../../../context";

dayjs.extend(utc)

const {RangePicker} = DatePicker

const OrderContent = memo((props) => {
  const [orderList, setOrderList] = useState(props.data)
  const [checkAll, setCheckAll] = useState(false)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)
  const payStatus = useContext(PayStatusContext)
  const status = useContext(StatusContext)
  const navigate = useNavigate();
  // 解析URL参数
  const [params] = useSearchParams();
  const query = Object.fromEntries(params);

  const [page, setPage] = useState(Number(query.page))
  const [pageSize, setPageSize] = useState(Number(query.pageSize))

  useEffect(() => {
    setOrderList([...props.data])
  }, [props.data])

  useEffect(() => {
    setPage(Number(query.page))
  }, [query.page])

  useEffect(() => {
    setPageSize(Number(query.pageSize))
  }, [query.pageSize])

  function handleCheck(e, index) {
    const newArr = orderList
    newArr[index].checked = !newArr[index].checked
    setOrderList([...newArr])
  }

  function handleCheckAll(e) {
    if (!checkAll) {
      const newArr = orderList
      for (let i = 0; i < orderList.length; i++) {
        newArr[i].checked = true
      }
      setOrderList([...newArr])
      setCheckAll(true)
    } else {
      const newArr = orderList
      for (let i = 0; i < orderList.length; i++) {
        newArr[i].checked = false
      }
      setOrderList([...newArr])
      setCheckAll(false)
    }
  }

  function handlePageChange(page, pageSize) {
    setStart((page - 1) * pageSize)
    setEnd((page - 1) * pageSize + pageSize)
    navigate(`/order?page=${page}&pageSize=${pageSize}&type=${query.type}`)
  }

  return (
      <>
        <div className="search-item">
          <div className="input-search">
            <Input
                style={{
                  height: "3.5rem",
                  background: "#FAFAFA",
                  border: "none",
                  color: "#718096"
                }}
                prefix={<SearchOutlined style={{fontSize: "1.5rem"}}/>}
                placeholder="请输入名称或其他关键字搜索..."
            />
          </div>
          <div className="date-choose">
            <RangePicker style={{
              background: "#FAFAFA",
              height: "3.5rem",
              border: "none",
            }}/>
          </div>
          {/*TODO 下载功能*/}
          <div className="download">
            <CloudDownloadOutlined/>下载
          </div>
        </div>
        <div className="list-item">
          {/*自定义表头*/}
          <div className="t-header">
            <div className="check-all">
              <input
                  type="radio"
                  className="radio"
                  checked={checkAll}
                  onChange={(e) => handleCheckAll(e)}
              />
            </div>
            <div className="order-name">
              订单
            </div>
            <div className="order-date">
              日期
            </div>
            <div className="order-buyer">
              买家
            </div>
            <div className="order-pay-status">
              支付状态
            </div>
            <div className="order-status">
              状态
            </div>
            <div className="order-price">
              价格
            </div>
          </div>
          <div className="t-body">
            {orderList.map((item, i) => {
              if (i >= start && i < end) {
                return (
                    <div className="order-item" key={SHA256(item.goodsName + i)}>
                      <div className="check-all">
                        <input
                            type="radio"
                            checked={item.checked}
                            className="radio"
                            value={item.checked}
                            onChange={(e) => handleCheck(e, i)}
                        />
                      </div>
                      <div
                          className="order-name"
                          onClick={() => navigate(`/order/${item.id}`)}>
                        <div>{item.goodsName}</div>
                        <div className="order-id">#ID{item.id}</div>
                      </div>
                      <div className="order-date">
                        {dayjs(item.saleTime).utc().format("YYYY.MM.DD")}
                      </div>
                      <div className="order-buyer">
                        {item.buyer}
                      </div>
                      <div className="order-pay-status">
                        <StatusBox data={payStatus[item.payStatus]}/>
                      </div>
                      <div className="order-status">
                        <StatusBox data={status[item.status]}/>
                      </div>
                      <div className="order-price">
                        ￥{item.price}
                      </div>
                    </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
        <div className="page-control">
          <Pagination
              defaultCurrent={page}
              defaultPageSize={pageSize}
              total={orderList.length}
              onChange={(page, pageSize) => handlePageChange(page, pageSize)}/>
        </div>
      </>
  )
})

export default OrderContent