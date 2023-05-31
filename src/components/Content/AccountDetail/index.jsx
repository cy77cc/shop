import AccountDetailWrapper from "./style";
import {memo} from "react";
import {useNavigate} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import Overview from "./child/Overview";
import RecentOrder from "./child/RecentOrder";
import BuyerDetail from "./child/BuyerDetail";
import BuyerTag from "./child/BuyerTag";

const AccountDetail = memo(() => {
  const navigate = useNavigate();

  return (<AccountDetailWrapper>
        <div className="detail-nav">
          <div
              className="back-btn"
              onClick={() => navigate(-1)}
          >
            <div><LeftOutlined style={{marginRight: ".6rem"}}/>全部客户</div>
          </div>
        </div>
        <div className="detail-box-wrapper">
          <div className="detail-left-box">
            <Overview/>
            <RecentOrder/>
          </div>
          <div className="detail-right-box">
            <BuyerDetail/>
            <BuyerTag/>
          </div>
        </div>
      </AccountDetailWrapper>)
})

export default AccountDetail