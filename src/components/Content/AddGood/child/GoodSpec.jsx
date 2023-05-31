import {memo, useEffect, useState} from "react";
import fetchData from "../../../../utils/net";
import {Input, message, Select, Tag} from "antd";
import SHA256 from "crypto-js/sha256";

const tagRender = (props) => {
  const {label, closable, onClose} = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
      <Tag
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{
            marginRight: 3,
          }}
      >
        {label}
      </Tag>
  );
};

const GoodSpec = memo((props) => {
  const [sizes, setSizes] = useState([])
  const [options, setOptions] = useState([])

  const {size, price, stock} = props.specState
  const {setSize, setSizeTypes, setPrice, setStock} = props.specMethod

  useEffect(() => {
    fetchData("get", {}, "product/size")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setSizes(data.sizes)
          }
        })
  }, [])

  useEffect(() => {
    fetchData("get", {}, `product/size/type?size_id=${size}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setOptions(data.types)
          }
        })
  }, [size])

  function handleSizeTypes(value) {
    setSizeTypes(value)
  }

  return (
      <div className="good-spec">
        <div style={{marginBottom: "1.5rem", fontSize: "1.13rem"}}>商品规格</div>
        <div style={{marginBottom: ".75rem"}}>
          <div style={{marginBottom: ".75rem"}}>规格</div>
          <div>
            <select
                className="clear-input"
                style={{width: "100%"}}
                value={size}
                onChange={e => setSize(e.target.value)}
            >
              {
                sizes.map((v, i) => {
                  return <option value={Number(v.id)} key={SHA256(v.name + i + "size")}>{v.name}</option>
                })
              }
            </select>
          </div>
        </div>
        <div style={{marginBottom: ".75rem"}}>
          <div>添加尺寸</div>
          <div>
            <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                style={{
                  width: '100%',
                  marginTop: "1.5rem",
                }}
                size={"large"}
                options={options}
                onChange={(value) => handleSizeTypes(value)}
            />
          </div>
        </div>
        <div style={{marginBottom: ".75rem"}}>
          <div style={{marginBottom: ".75rem"}}>价格</div>
          <div>
            <Input
                className="clear-input"
                placeHolder="请输入商品价格"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div style={{marginBottom: ".75rem"}}>库存</div>
          <div>
            <Input
                className="clear-input"
                placeHolder="请输入库存数量"
                value={stock}
                onChange={e => setStock(e.target.value)}
            />
          </div>
        </div>
      </div>
  )
})

export default GoodSpec