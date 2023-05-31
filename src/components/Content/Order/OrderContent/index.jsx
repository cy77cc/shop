import {memo, useContext} from "react";
import {Input, DatePicker, Pagination} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import SHA256 from "crypto-js/sha256"
import utc from "dayjs/plugin/utc"
import dayjs from "dayjs";
import StatusBox from "./StatusBox";
import {useNavigate} from "react-router-dom";
import {PayStatusContext, StatusContext} from "../../../../context";

dayjs.extend(utc)

const {RangePicker} = DatePicker

const OrderContent = memo((props) => {
  const {orderData, l, page, pageSize, type} = props.datas
  const {setPage, setPageSize} = props.methods
  const payStatus = useContext(PayStatusContext)
  const status = useContext(StatusContext)
  const navigate = useNavigate();

  function handlePageChange(page, pageSize) {
    setPage(page)
    setPageSize(pageSize)
    navigate(`/order?page=${page}&pageSize=${pageSize}&type=${type}`)
  }

  return (
      <>
        <div className="search-item">
          <div className="input-search">
            <Input
                className="clear-input"
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
        </div>
        <div className="list-item">
          {/*自定义表头*/}
          <div className="t-header">
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
            {orderData.map((item, i) => {
                return (
                    <div className="order-item" key={SHA256(item.name + i + 'order')}>
                      <div
                          className="order-name"
                          onClick={() => navigate(`/order/${item.order_info_id}`)}>
                        <div className="name">{item.name}</div>
                        <div className="order-id">#ID{item.order_info_id}</div>
                      </div>
                      <div className="order-date">
                        {dayjs(item.add_time).utc().format("YYYY.MM.DD")}
                      </div>
                      <div className="order-buyer">
                        {item.buyer_name}
                      </div>
                      <div className="order-pay-status">
                        <StatusBox data={payStatus[item.pay_status]}/>
                      </div>
                      <div className="order-status">
                        <StatusBox data={status[item.order_status]}/>
                      </div>
                      <div className="order-price">
                        ￥{item.total}
                      </div>
                    </div>
                )
            })}
          </div>
        </div>
        <div className="page-control">
          <Pagination
              defaultCurrent={page}
              defaultPageSize={pageSize}
              total={l}
              current={page}
              onChange={(page, pageSize) => handlePageChange(page, pageSize)}/>
        </div>
      </>
  )
})

export default OrderContent