import {memo} from "react";
import OrderDetailWrapper from "./style";
import {useNavigate} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import {BuyerInfo, OrderInfo, PayInfo, Remark} from "./Cpns";

const OrderDetail = memo(() => {
  // const getParams = useParams()
  const navigate = useNavigate();
  // const orderId = Number(getParams.id)

  function handleBack() {
    navigate(-1)
  }

  // TODO order detail
  // useEffect(() => {
  //   fetchData("get", {}, `order/detail?order_id=${orderId}`)
  //       .then(res => {
  //
  //       })
  // }, [orderId])

  return (
      <OrderDetailWrapper>
        <div className="order-detail-header">
          <div className="back" onClick={() => handleBack()}>
            <LeftOutlined style={{marginRight: ".5rem"}}/> 订单详情
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