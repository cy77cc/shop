import {memo, useEffect, useState} from "react";
import MyStoreWrapper from "./style";
import {Button, Input, message} from "antd";
import {useSelector} from "react-redux";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";

const MyStore = memo(() => {
  const [id, setId] = useState(-1)
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([])
  const [areas, setAreas] = useState([])
  const [industry, setIndustry] = useState([])
  const [shopInfo, setShopInfo] = useState({})
  const [flag, setFlag] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // 创建一个旧数据用于对比
  const [oldData, setOldData] = useState({})
  const {admin} = useSelector((state) => {
    return {
      admin: state.admin
    }
  })

  useEffect(() => {
    let {id} = admin
    setId(id)
  }, [admin])

  useEffect(() => {
    if (Number(id) > 0) {
      fetchData("get", {}, `shop/info?admin_id=${id}`).then(res => {
        let data = res.data
        if (data.status !== 1) {
          message.error(data.message)
        } else {
          setShopInfo(data.info)
          let newObj = data.info
          setOldData({...newObj})
        }
      })
    }
  }, [id])

  useEffect(() => {
    fetchData("get",
        {},
        "provinces").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setProvinces(data.provinces)
      }
    })

    fetchData("post",
        {},
        "industry").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setIndustry(data.industries)
      }
    })

    if (shopInfo.province_code) {
      fetchData("get",
          {},
          `cities?province_code=${shopInfo.province_code}`).then(res => {
        let data = res.data
        if (data.status !== 1) {
          message.error(data.message)
        } else {
          setCities(data.cities)
        }
      })
    }

    if (shopInfo.province_code && shopInfo.city_code) {
      fetchData("get",
          {},
          `areas?province_code=${shopInfo.province_code}&city_code=${shopInfo.city_code}`).then(res => {
        let data = res.data
        if (data.status !== 1) {
          message.error(data.message)
        } else {
          setAreas(data.areas)
        }
      })
    }
  }, [id, shopInfo.city_code, shopInfo.province_code])

  function handleName(e) {
    const newObj = shopInfo
    newObj.name = e.target.value
    setShopInfo({...newObj})
  }

  function handleIndustry(e) {
    const newObj = shopInfo
    newObj.industry_id = Number(e.target.value)
    setShopInfo({...newObj})
  }

  function handleProvince(e) {
    const newObj = shopInfo
    newObj.province_code = Number(e.target.value)
    setShopInfo({...newObj})
  }

  function handleCity(e) {
    const newObj = shopInfo
    newObj.city_code = Number(e.target.value)
    setShopInfo({...newObj})
  }

  function handleArea(e) {
    const newObj = shopInfo
    newObj.area_code = Number(e.target.value)
    setShopInfo({...newObj})
  }

  function handleDetail(e) {
    const newObj = shopInfo
    newObj.detail = e.target.value
    setShopInfo({...newObj})
  }

  function handleIntro(e) {
    const newObj = shopInfo
    newObj.intro = e.target.value
    setShopInfo({...newObj})
  }

  function saveChange() {
    setIsLoading(true)
    let data = shopInfo
    data.admin_id = id
    fetchData("put", data, "update/shop/info").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setIsLoading(false)
        message.success("修改成功")
      }
    })
  }

  useEffect(() => {
    if (oldData.name !== shopInfo.name) setFlag(true)
    else if (oldData.province_code !== shopInfo.province_code) setFlag(true)
    else if (oldData.city_code !== shopInfo.city_code) setFlag(true)
    else if (oldData.area_code !== shopInfo.area_code) setFlag(true)
    else if (oldData.detail !== shopInfo.detail) setFlag(true)
    else if (oldData.intro !== shopInfo.intro) setFlag(true)
    else if (oldData.industry_id !== shopInfo.industry_id) setFlag(true)
    else setFlag(false)
  }, [shopInfo.id, shopInfo.name, shopInfo.city_code, shopInfo.province_code, shopInfo.area_code, shopInfo.detail, shopInfo.intro, shopInfo.industry_id, oldData.name, oldData.province_code, oldData.city_code, oldData.area_code, oldData.detail, oldData.intro, oldData.industry_id])

  return (
      <MyStoreWrapper>
        <div className="mystore-content">
          <div className="title">店铺信息</div>
          <div className="hint">我们和您的客户将使用此信息与您联系。</div>
          <div className="name-industry">
            <div className="store-name">
              <div className="text">店铺名称</div>
              <div>
                <Input
                    className="clear-input"
                    value={shopInfo.name}
                    onChange={handleName}
                />
              </div>
            </div>
            <div className="industry">
              <div className="text">行业</div>
              <div>
                <select
                    className="clear-input"
                    value={shopInfo.industry_id}
                    onChange={handleIndustry}
                >
                  {industry?.map((v, i) => {
                    return <option key={SHA256('option' + i).toString()} value={v.industry_id}>{v.name}</option>
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="text">经营地址</div>
            <div>
              <div className="select-group">
                <div className="select-item">
                  <select
                      className="clear-input"
                      style={{width: "100%"}}
                      value={shopInfo.province_code}
                      onChange={handleProvince}
                  >
                    {provinces?.map((v, i) => {
                      return <option key={SHA256(i + v.name).toString()} value={v.code}>{v.name}</option>
                    })}
                  </select>
                </div>
                <div className="select-item">
                  <select
                      className="clear-input"
                      style={{width: "100%"}}
                      value={shopInfo.city_code}
                      onChange={handleCity}
                  >
                    {cities?.map((v, i) => {
                      return <option key={SHA256(i + v.name).toString()} value={v.code}>{v.name}</option>
                    })}
                  </select>
                </div>
                <div className="select-item">
                  <select
                      className="clear-input"
                      style={{width: "100%"}}
                      value={shopInfo.area_code}
                      onChange={handleArea}
                  >
                    {areas?.map((v, i) => {
                      return <option key={SHA256(i + v.name).toString()} value={v.code}>{v.name}</option>
                    })}
                  </select>
                </div>
              </div>
              <div>
                <Input
                    className="clear-input"
                    value={shopInfo.detail}
                    onChange={handleDetail}
                />
              </div>
            </div>
          </div>
          <div className="store-intro">
            <div className="text">店铺介绍</div>
            <div>
              <Input.TextArea
                  rows={8}
                  style={{background: "#FAFAFA"}}
                  showCount
                  maxLength={200}
                  value={shopInfo.intro}
                  onChange={handleIntro}
              />
            </div>
          </div>
          <div className="save-btn">
            <Button
                className="btn"
                onClick={saveChange}
                disabled={!flag}
                style={{background: flag ? "#0CAF60" : "#86D7B0"}}
                loading={isLoading && flag}
            >保存更改
            </Button>
          </div>
        </div>
      </MyStoreWrapper>
  )
})

export default MyStore