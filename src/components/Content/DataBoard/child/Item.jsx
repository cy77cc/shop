import {memo} from "react";

// 客单价 = 总销售额 ÷ 总订单数

const BoardItem1 = memo((props) => {
  const data = props.data
  return (
      <>
        <div className="board-item1">
          <div className="data-item data-item-top">
            <div>{props?.icon}</div>
            <div><span>{props?.title}</span></div>
          </div>
          <div className="data-item data-item-bottom">
            {data.num === -1 ? <div className="number-data">暂无数据</div> : <div className="number-data">
              <div style={{fontSize: "2rem", marginBottom: ".5rem"}}>{data.num}</div>
              <div>
              <span className={data.up < 100 ? 'down' : 'up'}>{
                data.up < 100 ? `-${data.percent}%` : `+${data.percent}%`
              }</span>
                <span style={{color: "#718096"}}>较上周</span></div>
            </div>}
            <div className="graph-data">
              <img style={{
                width: "70%"
              }} src={props.img} alt=""/>
            </div>
          </div>
        </div>
      </>
  )
})

export default BoardItem1