import React, { FunctionComponent } from "react";
import NewData from "./NewData";
import SummaryBuys from "./SummaryBuys";
import PurchaseList from "./PurchaseList";
import { CollectionItem } from "../types/common";

interface MainProps {
  addItem: (item: any) => void;
  sums: Array<CollectionItem>;
}

const Main: FunctionComponent<MainProps> = ({ addItem, sums }) => {
  return (
    <div>
      <NewData submit={addItem} />
      <SummaryBuys item={sums} />
      <PurchaseList />
    </div>
  );
};

export default Main;
