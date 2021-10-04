import React, { useState, useEffect, FunctionComponent } from "react";
import { CollectionItem } from "../types/common";
import SummaryItem from "./SummaryItem";

interface SummaryBuysProps {
  item: CollectionItem[];
}

const SummaryBuys: FunctionComponent<SummaryBuysProps> = ({ item }) => {
  const [items, setItems] = useState<CollectionItem[]>([]);

  useEffect(() => {
    setItems(item);
  }, [item]);

  function getSummary(
    arr: CollectionItem[],
    col: "monthPrice" | "totalPrice"
  ): number {
    let sum = 0;
    for (let i of arr) {
      sum += i[col];
    }
    return sum;
  }

  return (
    <div className="summary-div">
      <div className="column">
        <div>
          <h6>период</h6>
        </div>
        <div>
          <h6>за текущий месяц</h6>
        </div>
        <div>
          <h6>за всё время</h6>
        </div>
      </div>
      <div className={"auto-div"}>
        {items.map((i, index) => (
          <SummaryItem key={index} item={i} />
        ))}
      </div>
      <div className={"column"}>
        <div>
          <h6>всего</h6>
        </div>
        <div>
          <h6>{getSummary(items, "monthPrice")}</h6>
        </div>
        <div>
          <h6>{getSummary(items, "totalPrice")}</h6>
        </div>
      </div>
    </div>
  );
};

export default SummaryBuys;
