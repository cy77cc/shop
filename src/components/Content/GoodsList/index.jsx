import {memo, useEffect, useRef, useState} from "react";
import GoodsListWrapper from "./style";
import {Input, message, Pagination, Select, Switch} from "antd";
import {FilterOutlined, PlusOutlined, SearchOutlined} from "@ant-design/icons";
import {useNavigate, useSearchParams} from "react-router-dom";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";

const GoodsList = memo(() => {
  const [isShow, setIsShow] = useState(true)
  const [params] = useSearchParams()
  const query = Object.fromEntries(params);
  const [page, setPage] = useState(Number(query.page))
  const [pageSize, setPageSize] = useState(Number(query.pageSize))
  const [products, setProducts] = useState([])
  const [len, setLen] = useState(0)
  const filterRef = useRef();
  const navigate = useNavigate();

  function switchShow() {
    if (!isShow) {
      filterRef.current.style.height = "0"
    } else {
      filterRef.current.style.height = "5.5rem"
    }
    setIsShow(!isShow)
  }

  function barBackground(stock, saleNum) {
    if (stock === 0) {
      return {
        title: "差",
        style: {background: '#FD6A6A', width: `0%`}
      }
    }
    if (saleNum/stock > 0.6) {
      return {
        title: "好",
        style: {background: '#0CAF60', width: `${(saleNum/stock).toFixed(2)*100}%`}
      }
    } else if (saleNum/stock > 0.4) {
      return {
        title: "中等",
        style: {background: '#FFD023', width: `${(saleNum/stock).toFixed(2)*100}%`}
      }
    } else {
      return {
        title: "差",
        style: {background: '#FD6A6A', width: `${(saleNum/stock).toFixed(2)*100}%`}
      }
    }
  }

  useEffect(() => {
    fetchData("get", {}, `product/list?page=${page-1}&pageSize=${pageSize}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setProducts(data.products)
            setLen(data.length)
          }
        })
  }, [page, pageSize])

  function handleAlive(checked, e, id) {
    let status = 0
    if (checked) {
      status = 1
    }
    fetchData("put", {}, `product/alive?is_alive=${status}&id=${id}`)
        .then(res => {
          if (res.data.status){
            let newArr = products
            for (let i = 0; i < newArr.length; i++) {
              if (newArr[i].id === id) {
                newArr[i].is_alive = status
              }
            }
            setProducts([...newArr])
          }
        })
  }

  return (
      <GoodsListWrapper>
        <div className="search">
          <Input
              size="large"
              placeholder="请输入名称或其他关键字搜索..."
              prefix={<SearchOutlined />}
              className="clear-input mr-75"
          />
          <div className="filter-btn mr-75" onClick={switchShow}><FilterOutlined/>筛选</div>
          <div className="add-good" onClick={() => navigate("/goods/add")}><PlusOutlined/>添加商品</div>
        </div>
        <div className="filter-content" ref={filterRef}>
          <div>
            <div>价格</div>
            <Select className="select-item"></Select>
          </div>
          <div>
            <div>状态</div>
            <Select className="select-item"></Select>
          </div>
          <div>
            <div>产品类型</div>
            <Select className="select-item"></Select>
          </div>
        </div>
        <div className="t-head">
          <div>产品名称</div>
          <div>价格</div>
          <div>库存</div>
          <div>已售</div>
          <div>上下架状态</div>
        </div>
        <div className="t-body">
          {
            products.map((v, i) => {
              return (
                  <div className="t-row" key={SHA256(v.name+i+"goods")}>
                    <div className="product-name t-column">
                      <div className="avatar mr-75">
                        <img src={v.img_url} alt=""/>
                      </div>
                      <div className="message">
                        <div className="name">{v.name}</div>
                        <div className="product-id">ID: {v.id}</div>
                      </div>
                    </div>
                    <div className="t-column">￥{v.price.toFixed(2)}</div>
                    <div className="t-column">{v.stock}</div>
                    <div className="t-column sale-num">
                      <div className="title">
                        <div>{barBackground(v.stock, v.sale_num).title}</div>
                        <div style={{color: "#718096"}}>已售{v.sale_num}</div>
                      </div>
                      <div className="status">
                        <div
                            className="bar"
                            style={barBackground(v.stock, v.sale_num).style}
                        ></div>
                      </div>
                    </div>
                    <div className="t-column">
                      <Switch checked={v.is_alive} onChange={(checked, e) => handleAlive(checked, e, v.id)} />
                    </div>
                  </div>
              )
            })
          }
        </div>
        <div className="footer">
          <Pagination
              defaultCurrent={1}
              defaultPageSize={10}
              onChange={(page, pageSize) => {
                setPage(page)
                setPageSize(pageSize)
                navigate(`/goods?page=${page}&pageSize=${pageSize}`)
              }}
              current={page}
              total={len}
          />
        </div>
      </GoodsListWrapper>
  )
})

export default GoodsList