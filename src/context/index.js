import {createContext} from "react";

export const PayStatusContext = createContext([
  {
    text: "未支付",
    color: "#F4F0FF",
    fontColor: "#8C62FF"
  }, {
    text: "已支付",
    color: "#E7F7EF",
    fontColor: "#0CAF60"
  }
])

export const StatusContext = createContext([
  {
    text: "待付款",
    color: "#baffff",
    fontColor: "#6b9ff1"
  }, {
    text: "待发货",
    color: "#FFF0E6",
    fontColor: "#FE964A"
  }, {
    text: "已发货",
    color: "#F4F0FF",
    fontColor: "#8C62FF"
  }, {
    text:"退款中",
    color: "#fdffc3",
    fontColor: "#a89d0d",
  }, {
    text: "已完成",
    color: "#E7F7EF",
    fontColor: "#0CAF60"
  }, {
    text: "已取消",
    color: "#FFF0F0",
    fontColor: "#FD6A6A"
  }
])