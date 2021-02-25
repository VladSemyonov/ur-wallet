import React, {useEffect, useState} from 'react'
import NewData from "./components/NewData";
import SummaryBuys from "./components/SummaryBuys";
import './index.css'
import PurchaseList from "./components/PurchaseList";

var Datastore = require('nedb')
var db = new Datastore({filename: 'datafile1', autoload: true})
function addItem(item) {
    db.insert(item)
}

export default function App() {

    const [properts, setProperts] = useState([])

    useEffect(() => {
        db.find({}, function (err, docs) {
        if (!err) {
            setProperts(docs);
        }}
        )}, [])

    return (
        <div className={'container'}>
            <NewData submit={addItem}/>
            <SummaryBuys props={properts}/>
            <PurchaseList props={properts}/>
        </div>
    )
}