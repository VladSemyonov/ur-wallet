import React, { ReactElement, useEffect, useState } from "react";
import { observer } from "mobx-react";

const initObj: Results = {
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

interface Results {
  [index: number]: number;
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
}

interface MonthArr {
  [index: number]: string;
}

interface MonthObj {
  [index: number]: number;
  month: string;
  count: number;
}

const months: MonthArr = [
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

const Statistics: any = observer(() => {
  const [data, setData] = useState<Results>(initObj);

  // useEffect(() => {
  //   let res: Results = {
  //     0: 0,
  //     1: 0,
  //     2: 0,
  //     3: 0,
  //     4: 0,
  //     5: 0,
  //     6: 0,
  //     7: 0,
  //     8: 0,
  //     9: 0,
  //     10: 0,
  //     11: 0,
  //   };
  //   for (let item of props.items) {
  //     const { price, month }: { price: number; month: number } = item;
  //     initObj[month] += Number(price);
  //   }
  //   setData(res);
  // }, [props]);

  const createData = (obj: Results): MonthObj[] => {
    let resultArr: MonthObj[] = [];
    for (let item in obj) {
      resultArr.push({
        month: months[item],
        count: obj[item],
      });
    }
    return resultArr;
  };

  const createDiv = (item: MonthObj, i: number): ReactElement => {
    return (
      <div onClick={() => props.setDiagram(i)} className={"stats-div"} key={i}>
        <span>{item.month}</span>
        <span>{item.count}</span>
      </div>
    );
  };

  return (
    <div>
      <h1>{secs.secs}</h1>
      {/* {createData(data).map((item, index) => createDiv(item, index))} */}
    </div>
  );
});
export default Statistics;
