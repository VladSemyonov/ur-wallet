import React, { FunctionComponent, useContext } from "react";
import { DataItem } from "../types/common";
import { Context } from "../App";

type GetClass = {
  (num: number): string | undefined;
};

interface ListItemProps {
  item: DataItem;
  index: number;
}

const ListItem: FunctionComponent<ListItemProps> = ({ item, index }) => {
  const { deleteI } = useContext(Context);

  const getClass: GetClass = (num) => {
    if (num % 2 === 0) return "greyback";
  };

  const getClass1: GetClass = (num) => {
    if (num % 2 === 0) return "blackback";
    else return "whiteback";
  };

  return (
    <div
      style={{ width: "960px", padding: "0 10px" }}
      className={getClass(index)}
    >
      <div className={`purchase-list-item`}>
        <div className={"item-date"}>{item.date}</div>
        <div className={"item-description"}>{item.description}</div>
        <div className={"item-collection"}>{item.collectionName}</div>
        <div className={"item-price"}>{item.price + " грн"}</div>
        <div style={{ marginRight: "0" }}>
          <button
            onClick={() => {
              deleteI(item._id);
            }}
            className={`danger-btn ${getClass1(index)}`}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
