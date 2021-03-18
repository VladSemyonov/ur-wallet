import React from 'react'
import NewData from "./NewData";
import SummaryBuys from "./SummaryBuys";
import PurchaseList from "./PurchaseList";

export default function Main(props) {

    return (
        <div>
            <NewData submit={props.addItem}/>
            <SummaryBuys item={props.sums}/>
            <PurchaseList deleteI={props.deleteItem}
            />
        </div>
    )
}