import {memo} from "react";

const BuyerTag = memo(() => {
  return (
      <div className="buyer-tag">
        <div className="title">标签</div>
        <div className="tag-content">
          <div className="tag-item">标签</div>
        </div>
      </div>
  )
})

export default BuyerTag