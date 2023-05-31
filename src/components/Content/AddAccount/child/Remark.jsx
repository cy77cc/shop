import {memo} from "react";
import {Input} from "antd";

const Remark = memo((props) => {
  const {remark} = props.remarkState
  const {setRemark} = props.remarkMethod
  return (
      <div className="remark">
        <div className="title">备注</div>
        <div className="hint">添加有关客户的备注</div>
        <div>
          <Input
              className="clear-input"
              placeholder="输入相关备注"
              value={remark}
              onChange={e => setRemark(e.target.value)}
          />
        </div>
      </div>
  )
})

export default Remark