import {memo} from "react";
import PromotionWrapper from "./style";
import {Empty} from "antd";

const Promotion = memo(() => {
  return (
      <PromotionWrapper>
        <Empty description={"暂未开发"}/>
      </PromotionWrapper>
  )
})

export default Promotion