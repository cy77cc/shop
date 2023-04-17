import {memo} from "react";

const Remark = memo(() => {
  return (
      <div className="remark">
        <div className="top-box">
          <div className="remark-text">备注</div>
          <div className="edit">编辑</div>
        </div>
        <div className="bottom-box">
          <span className="remark-content">买家暂无备注</span>
        </div>
      </div>
  )
})

export default Remark