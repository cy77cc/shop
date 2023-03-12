import {memo} from "react";
import {DatePicker} from "antd"
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const AllSale = memo(() => {
  return (
      <>
        <div className="all-sale-top all-sale-item">
          <div className="all-sale-title">
            <div className="title">整体销售额 (元)</div>
            <div className="">
              <div className="sum">56,345.98</div>
            </div>
          </div>
          <div>
            <RangePicker
              format={dateFormat}
            />
          </div>
        </div>
        <div className="all-sale-bottom all-sale-item">
        {/*  TODO 加表*/}
        </div>
      </>
  )
})

export default AllSale