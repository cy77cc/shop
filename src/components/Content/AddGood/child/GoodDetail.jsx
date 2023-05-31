import {memo} from "react";
import TextArea from "antd/es/input/TextArea";
import {Input} from "antd";

const GoodDetail = memo((props) => {
  const {detail, video} = props?.detail
  const {setDetail, setVideo} = props?.detailMethod
  return (
      <div className="good-detail">
        <div style={{marginBottom: "1.5rem", fontSize: "1.13rem"}}>商品详情</div>
        <div style={{marginBottom: "1.5rem"}}>
          <div style={{marginBottom: "1.5rem"}}>描述</div>
          <div>
            <TextArea
                rows={10}
                maxLength={1000}
                showCount={true}
                value={detail}
                onChange={e => setDetail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div style={{marginBottom: "1.5rem"}}>
            添加视频URL <span style={{color: "#A0AEC0"}}>(可选)</span>
          </div>
          <div style={{height: "3.5rem"}}>
            <Input
                className="clear-input"
                placeholder="添加视频URL"
                value={video}
                onChange={e => setVideo(e.target.value)}
            />
          </div>
        </div>
      </div>
  )
})

export default GoodDetail