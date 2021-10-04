import React, { FunctionComponent } from "react";
import { CollectionItem } from "../types/common";

interface SummaryItemProp {
  item: CollectionItem;
}

const SummaryItem: FunctionComponent<SummaryItemProp> = ({ item }) => {
  return (
    <div className="column secondary">
      <div>
        <h6>{item.collection}</h6>
      </div>
      <div>
        <h6>{item.monthPrice}</h6>
      </div>
      <div>
        <h6>{item.totalPrice}</h6>
      </div>
    </div>
  );
};

export default SummaryItem;
