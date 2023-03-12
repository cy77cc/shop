import {memo} from "react";

const BoardItem1 = memo((props) => {
  return (
      <div className="board-item1">
        <div className="data-item data-item-top">
            <div>{props?.icon}</div>
            <div><span>{props?.title}</span></div>
        </div>
        <div className="data-item data-item-bottom">
          <div className="number-data">
            <div style={{fontSize:"2rem", marginBottom: ".5rem"}}>8,245.00</div>
            <div>
              <span className={'down'}>+0.5%</span>
              <span style={{color: "#718096"}}>较上周</span></div>
          </div>
          <div className="graph-data">
          {/*  TODO 添加数据图*/}
          </div>
        </div>
      </div>
  )
})

export default BoardItem1