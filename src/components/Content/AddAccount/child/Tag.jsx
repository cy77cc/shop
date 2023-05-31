import {memo} from "react";
import {Input} from "antd";

const Tag = memo((props) => {
  const {tag} = props.tagState
  const {setTag} = props.tagMethod
  return (
      <div className="tag">
        <div className="title">标签</div>
        <div className="hint">标签可用于将客户分组</div>
        <div>
          <Input
              className="clear-input"
              placeholder="输入相关标签"
              value={tag}
              onChange={e => setTag(e.target.value)}
          />
        </div>
      </div>
  )
})

export default Tag