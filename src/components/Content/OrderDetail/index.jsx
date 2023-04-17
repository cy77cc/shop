import {memo} from "react";
import OrderDetailWrapper from "./style";
import {useNavigate, useParams} from "react-router-dom";
import {LeftOutlined, PrinterOutlined} from "@ant-design/icons";
import {BuyerInfo, OrderInfo, PayInfo, Remark} from "./Cpns";

const OrderDetail = memo(() => {
  const getParams = useParams()
  const navigate = useNavigate();
  const orderId = getParams.id

  function handleBack() {
    navigate(-1)
  }

  return (
      <OrderDetailWrapper>
        <div className="order-detail-header">
          <div className="back" onClick={() => handleBack()}>
            <LeftOutlined style={{marginRight: ".5rem"}}/> 订单详情
          </div>
          <div className="print-order">
            <PrinterOutlined style={{marginRight: ".5rem"}}/> 打印订单
          </div>
        </div>
        <div className="order-detail-content">
          <div className="left-content">
            {/*发货详情*/}
            <OrderInfo/>
            {/*支付详情*/}
            <PayInfo/>
          </div>
          <div className="right-content">
            {/*买家信息*/}
            <BuyerInfo/>
            {/*备注*/}
            <Remark/>
          </div>
        </div>
      </OrderDetailWrapper>
  )
})

export default OrderDetail