import React, { FunctionComponent } from "react";
import NewData from "./NewData";
import SummaryBuys from "./SummaryBuys";
import PurchaseList from "./PurchaseList";
import { CollectionItem } from "../types/common";

interface MainProps {
  addItem: (item: NewData) => void;
  sums: Array<CollectionItem>;
  deleteItem: (item: NewData) => void;
}

const Main: FunctionComponent<MainProps> = ({ addItem, sums, deleteItem }) => {
  return (
    <div>
      <NewData submit={addItem} />
      <SummaryBuys item={sums} />
      <PurchaseList deleteI={deleteItem} />
    </div>
  );
};

export default Main;
