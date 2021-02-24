import React, {useEffect, useState} from 'react'
import NewData from "./components/NewData";
import SummaryBuys from "./components/SummaryBuys";
import './index.css'
import PurchaseList from "./components/PurchaseList";

var Datastore = require('nedb')
var db = new Datastore({filename: 'datafile1', autoload: true})

export default function App() {

    const [properts, setProperts] = useState([])

    useEffect(() => db.find({}, function (err, docs) {
        if (!err) {
            setProperts(docs);
        }
    }), [])

    function addDoc(er) {
        db.insert(er)
    }

    return (
        <div className={'container'}>
            <NewData submit={addDoc}/>
            <SummaryBuys props={properts}/>
            <PurchaseList props={properts}/>
        </div>
    )
}