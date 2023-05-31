import {memo, useState} from "react";
import OpDataWrapper from "./style";
import {DatePicker} from "antd";
import SaleNum from "./child/SaleNum";
import Visitor from "./child/Visitor";
import SourceFrom from "./child/SourceFrom";
import Account from "./child/Account";
import Gender from "./child/Gender";
import AreaDistribution from "./child/AreaDistribution";
import NewAccount from "./child/NewAccount";

const OpData = memo(() => {
  const [selectYear, setSelectYear] = useState(2023)
  return (
      <OpDataWrapper>
        <div className="time-select">
          <DatePicker picker="year" size="large" onChange={(date, dateString) => setSelectYear(Number(dateString))
          }/>
        </div>
        <div className="cards-1">
          <SaleNum selectYear={selectYear}/>
          <Visitor selectYear={selectYear}/>
        </div>
        <div className="cards-2">
          <SourceFrom selectYear={selectYear}/>
          <Account selectYear={selectYear}/>
          <Gender selectYear={selectYear}/>
        </div>
        <div className="cards-3">
          <AreaDistribution selectYear={selectYear}/>
          <NewAccount selectYear={selectYear}/>
        </div>
      </OpDataWrapper>
  )
})

export default OpData