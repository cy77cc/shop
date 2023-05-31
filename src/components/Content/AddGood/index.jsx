import {memo, useEffect, useState} from "react";
import AddGoodWrapper from "./style";
import {useNavigate} from "react-router-dom";
import {Button, message} from "antd";
import BaseInfo from "./child/BaseInfo";
import GoodImage from "./child/GoodImage";
import GoodDetail from "./child/GoodDetail";
import GoodSpec from "./child/GoodSpec";
import fetchData from "../../../utils/net";

const AddGood = memo(() => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [type, setType] = useState(1)
  const [brand, setBrand] = useState("")
  const [files, setFiles] = useState([])
  const [detail, setDetail] = useState("")
  const [video, setVideo] = useState("")
  const [size, setSize] = useState(1)
  const [sizeTypes, setSizeTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [flag, setFlag] = useState(false)
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  
  useEffect(() => {
    if (name !== "" && brand !== "" && files.length > 0 && detail !== "" && sizeTypes.length > 0) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [brand, detail, files, name, sizeTypes.length])


  function handleSubmit() {
    setIsLoading(true)
    let data = {
      name: name,
      type: type,
      brand: brand,
      files: files,
      detail: detail,
      video: video,
      size: Number(size),
      size_types: sizeTypes,
      price: Number(price),
      stock: Number(stock)
    }
    fetchData("post", data, "product/add")
        .then(res => {
          if (res.data.status !== 1) {
            setIsLoading(false)
            message.error(res.data.message)
          } else {
            setIsLoading(false)
            message.success(res.data.message)
            navigate("/goods?page=1&pageSize=10")
          }
        })
  }

  return (
      <AddGoodWrapper>
        <div className="item-1">
          <BaseInfo baseData={{name, type, brand}} dataMethod={{setName, setType, setBrand}}/>
          <GoodImage files={{files}} fileMethod={{setFiles}}/>
        </div>
        <div className="item-2">
          <GoodDetail detail={{detail, video}} detailMethod={{setDetail, setVideo}}/>
          {/*商品规格*/}
          <GoodSpec specState={{size, sizeTypes, price, stock}} specMethod={{setSize, setSizeTypes, setPrice, setStock}}/>
        </div>
        <div className="item-3">
          <Button className="cancel mr-75" onClick={() => navigate(-1)}>取消</Button>
          <Button
              className="save"
              disabled={!flag}
              style={{background: flag ? "#0CAF60" : "#86D7B0"}}
              loading={isLoading}
              onClick={handleSubmit}
          >保存</Button>
        </div>
      </AddGoodWrapper>
  )
})

export default AddGood