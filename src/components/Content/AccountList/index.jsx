import {memo, useEffect, useRef, useState} from "react";
import AccountWrapper from "./style";
import {Button, Input, Select, DatePicker, Pagination, message, Empty} from "antd";
import {EllipsisOutlined, FilterOutlined, PlusOutlined, SearchOutlined} from "@ant-design/icons";
import {useNavigate, useSearchParams} from "react-router-dom";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";
import dayjs from "dayjs";

const orderNumOptions = [
  {
    "value": 0,
    "label": "所有"
  },
  {
    "value": 1,
    "label": ">1"
  },
  {
    "value": 2,
    "label": ">2"
  },
  {
    "value": 3,
    "label": ">3"
  },
  {
    "value": 4,
    "label": ">4"
  },
  {
    "value": 5,
    "label": ">5"
  },
  {
    "value": 6,
    "label": ">6"
  },
  {
    "value": 7,
    "label": ">7"
  },
  {
    "value": 8,
    "label": ">8"
  }
]
const dealNumOptions = [
  {
    "value": 0,
    "label": "所有"
  },
  {
    "value": 100,
    "label": ">100"
  },
  {
    "value": 500,
    "label": ">500"
  },
  {
    "value": 1000,
    "label": ">1000"
  },
  {
    "value": 2000,
    "label": ">12000"
  }
]

const AccountList = memo(() => {
  const filterRef = useRef();
  const [isShow, setIsShow] = useState(false)
  const [messageApi, conentHolder] = message.useMessage();
  // 解析参数
  const [params] = useSearchParams()
  const query = Object.fromEntries(params);
  const [page, setPage] = useState(Number(query.page))
  const [pageSize, setPageSize] = useState(Number(query.pageSize))
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData("get", {}, `account/list?page=${(page-1)*pageSize}&pageSize=${pageSize}`).then(res => {
      if (res.data.status !== 1) {
        messageApi.error(res.data.message)
      } else {
        setData(res.data.data)
      }
    })
  }, [page, pageSize, messageApi])

  function filterClick(e) {
    if (isShow) {
      filterRef.current.style.height = "0"
    } else {
      filterRef.current.style.height = "6rem"
    }
    setIsShow(!isShow)
  }

  function changePage(page, pageSize) {
    setPage(page)
    setPageSize(pageSize)
    navigate(`/account?page=${page}&pageSize=${pageSize}`)
  }

  function parseDate(date) {
    return dayjs(date).format("YYYY.MM.DD")
  }

  function handleDetail(e, accountId) {
    navigate(`/account/detail/${accountId}`)
  }

  return (
      <AccountWrapper>
        {conentHolder}
        <div className="item search">
          <Input prefix={<SearchOutlined style={{fontSize: "1.5rem"}}/>} size="large"
                 className="clear-style search-input" placeholder="请输入名称或其他关键字搜索..."/>
          <Button onClick={filterClick} className="filter-btn clear-style" size="large"
                  icon={<FilterOutlined/>}>筛选</Button>
          <Button className="add-account clear-style" size="large" icon={<PlusOutlined/>}>添加客户</Button>
        </div>
        <div className="item filter" ref={filterRef}>
          <div className="filter-item">
            <div className="item-top">订单数</div>
            <div className="item-bottom">
              {/*whb  width height background 重置一下样式*/}
              <Select size="large" className="whb" defaultValue={0} options={orderNumOptions} />
            </div>
          </div>
          <div className="filter-item">
            <div className="item-top">交易金额</div>
            <div className="item-bottom">
              <Select size="large" className="whb" defaultValue={0} options={dealNumOptions} />
            </div>
          </div>
          <div className="filter-item">
            <div className="item-top">交易时间</div>
            <div className="item-bottom">
              <DatePicker className="whb" size="large"/>
            </div>
          </div>
          <div className="filter-item">
            <div className="item-top">客户类型</div>
            <div className="item-bottom">
              <Select size="large" className="whb" />
            </div>
          </div>
        </div>
        <div className="item content">
          <div className="thead">
            <div>客户名称</div>
            <div>Email</div>
            <div>上次交易时间</div>
            <div>订单数(笔)</div>
            <div>交易总额(元)</div>
          </div>
          <div className="tbody">
            {
              !data ? <Empty /> : data.map((v, i) => {
              return (
                  <div className="t-row" key={SHA256(v.account_id+v.user_name)}>
                    <div className="t-item username">
                      <div className="avatar"><img src={v.avatar_url} width="26px" alt="" /></div>
                      <div>{v.user_name}</div>
                    </div>
                    <div className="t-item">
                      {v.email}
                    </div>
                    <div className="t-item">
                      {parseDate(v.last_buy_time)}
                    </div>
                    <div className="t-item">
                      {v.order_num}
                    </div>
                    <div className="t-item">
                      {v.total_deal_num}
                    </div>
                    <div
                        className="more"
                        onClick={(e) => handleDetail(e, v.account_id)}
                    ><EllipsisOutlined /></div>
                  </div>
              )
            })}
          </div>
        </div>
        <div className="item footer">
          <Pagination
              defaultCurrent={page}
              defaultPageSize={pageSize}
              total={1500}
              onChange={(page, pageSize) => changePage(page, pageSize)}
          />
        </div>
      </AccountWrapper>
  )
})

export default AccountList