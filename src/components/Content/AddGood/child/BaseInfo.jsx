import {memo, useEffect, useState} from "react";
import {Input, message} from "antd";
import fetchData from "../../../../utils/net";
import {useSelector} from "react-redux";
import SHA256 from "crypto-js/sha256";

const BaseInfo = memo((props) => {
  const [types, setTypes] = useState([])
  const [id, setId] = useState(-1)
  const {name, type, brand} = props.baseData
  const {setName, setType, setBrand} = props.dataMethod

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
    if (id > 0) {
      fetchData("get", {}, `product/type?admin_id=${id}`)
          .then(res => {
            let data = res.data
            if (data.status !== 1) {
              message.error(data.message)
            } else {
              setTypes(res.data.types)
            }
          })
    }
  }, [id])

  return (
      <div className="base-info">
        <div className="title">基础信息</div>
        <div className="info-item">
          <div>商品名称</div>
          <div>
            <Input
                size="large"
                className="clear-input"
                style={{height: "3.5rem"}}
                placeholder="输入商品名称"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="info-item">
          <div>商品类别</div>
          <div>
            <select
                className="clear-input"
                style={{width: "100%"}}
                value={type}
                onChange={(e) => setType(Number(e.target.value))}
            >
              {types?.map((v, i) => {
                return <option key={SHA256(v.name + i)} value={v.id}>{v.name}</option>
              })}
            </select>
          </div>
        </div>
        <div className="info-item">
          <div>品牌</div>
          <div>
            <Input
                size="large"
                className="clear-input"
                style={{height: "3.5rem"}}
                placeholder="输入品牌名称"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
      </div>
  )
})

export default BaseInfo