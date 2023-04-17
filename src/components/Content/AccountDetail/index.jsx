import AccountDetailWrapper from "./style";
import {memo} from "react";
import {useParams} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";

const AccountDetail = memo(() => {
  const {id} = useParams()

  return (
      <AccountDetailWrapper>
        <div className="">
          <div><LeftOutlined />客户详情</div>
        </div>
      </AccountDetailWrapper>
  )
})

export default AccountDetail