import React, { useEffect, useState } from "react";

const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export default function Statistics(props) {
  const [data, setData] = useState();

  useEffect(() => {
    let res = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
    };
    for (let item of props.items) {
      const { price, month } = item;
      res[month] += Number(price);
    }
    setData(res);
  }, [props]);

  const createData = (obj) => {
    let resultArr = [];
    for (let item in obj) {
      resultArr.push({
        month: months[item],
        count: obj[item],
      });
    }
    return resultArr;
  };

  const createDiv = (item, i) => {
    return (
      <div onClick={() => props.setDiagram(i)} className={"stats-div"} key={i}>
        <span>{item.month}</span>
        <span>{item.count}</span>
      </div>
    );
  };

  return (
    <div>{createData(data).map((item, index) => createDiv(item, index))}</div>
  );
}
