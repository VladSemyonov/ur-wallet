import React, {useEffect, useState} from 'react'
import NewData from "./components/NewData";
import SummaryBuys from "./components/SummaryBuys";
import './index.css'
import PurchaseList from "./components/PurchaseList";
import CollectionsList from "./components/CollectionsList";

var Datastore = require('nedb')
var db = new Datastore({filename: 'datafile1', autoload: true})

export default function App() {

    const [properts, setProperts] = useState([])
    const [collections, setCollections] = useState([])
    const [sums, setSums] = useState([])
    const [form, setForm] = useState(false)

    useEffect(() => {
        startDb()
    }, [])

    useEffect(() => {
        getSums()
    }, [collections, properts])

    async function addItem(item) {
        await db.insert(item)
        startDb()
    }

    function deleteItem(item) {
        db.remove({_id: item})
        startDb()
        getSums()
    }

    async function startDb() {
        db.find({collectionName: {$exists: true}}, function (err, docs) {
                if (!err) {
                    setProperts(docs);
                }
            }
        )
        db.find({collection: {$exists: true}}, function (err, docs) {
                if (!err) {
                    setCollections(docs);
                }
            }
        )
    }

    function getSums() {
        let thisMonth = new Date().getMonth()
        let sum = []
        for (const {collection} of collections) {
            sum = [...sum, {
                collection: collection,
                monthPrice: 0,
                totalPrice: 0
            }];
        }
        for (const {collectionName, price, month} of properts) {
            if (month === thisMonth) {
                for (let i of sum) {
                    if (collectionName === i.collection) {
                        i.monthPrice += Number(price)
                        i.totalPrice += Number(price)
                    }
                }
            }
            setSums(sum)
        }
    }

    function changeItem(item) {
        console.log('change item', item)
        db.update({_id: item._id}, {$set: {collection: item.collection}})
        db.update({collectionName: item.prev}, {$set: {collectionName: item.collection}})
        startDb()
    }

    function toggleForm() {
        setForm(!form)
    }

    return (
        <div className={'container'}>
            <button style={{width: 'inherit'}} onClick={toggleForm}>изменить список категорий</button>
            <NewData collections={collections} submit={addItem}/>
            <SummaryBuys collections={collections} items={sums}/>
            <PurchaseList deleteI={deleteItem} items={properts}/>
            {form &&
            <CollectionsList toggle={toggleForm} addItem={addItem} changeItem={changeItem} deleteCollection={deleteItem}
                             collections={collections}/>}
        </div>
    )
}