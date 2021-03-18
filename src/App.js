import React, {useEffect, useState} from 'react'
import './index.css'
import CollectionsList from "./components/CollectionsList";
import TopNavigation from "./components/TopNavigation";
import Statistics from "./components/Statistics";
import {Route, Redirect} from 'react-router-dom'
import Main from "./components/Main";
import Diagrams from './components/Diagrams'

const Context = React.createContext()
export {Context}

var Datastore = require('nedb')
var db = new Datastore({filename: 'datafile1', autoload: true})

function App() {

    const [properts, setProperts] = useState([])
    const [collections, setCollections] = useState([])
    const [sums, setSums] = useState([])
    const [form, setForm] = useState(false)
    const [diagramItem, setDiagramItem] = useState()
    const [showDiagram, setShowDiagram] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        startDb()
    }, [])

    useEffect(() => {
        getSums()
    }, [collections])

    async function addItem(item) {
        await db.insert(item)
        setShowForm(false)
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
            } else {
                for (let i of sum) {
                    if (collectionName === i.collection) {
                        i.totalPrice += Number(price)
                    }
                }
            }
            setSums(sum)
        }
    }

    function changeItem(item) {
        db.update({_id: item._id}, {$set: {collection: item.collection}})
        db.update({collectionName: item.prev}, {$set: {collectionName: item.collection}})
        setShowForm(false)
        startDb()
    }

    function toggleForm() {
        setForm(!form)
    }

    const chooseMonth = async (i) => {
        let sum = []
        let arr = await properts.filter(item => item.month === i)
        for (const {collection} of collections) {
            sum = [...sum, {
                collection: collection,
                totalPrice: 0
            }]
        }
        for (const {collectionName, price} of arr) {
            for (let i of sum) {
                if (collectionName === i.collection) {
                    i.totalPrice += Number(price)
                }
            }
        }
        setDiagramItem(sum)
        setShowDiagram(true)
        setShowDiagram(false)
    }

    return (
        <Context.Provider value={{
            purchases: properts,
            categories: collections
        }}>
            <div className={'container'}>
                {showDiagram && <Redirect to={'/diagram'}/>}
                <TopNavigation toggleForm={toggleForm}/>
                <Route exact path={'/'} render={props => <Main {...props}
                                                               addItem={addItem}
                                                               changeItem={changeItem}
                                                               deleteItem={deleteItem}
                                                               sums={sums}
                />}/>
                <Route path={'/stats'} render={props => <Statistics {...props} items={properts}
                                                                    collections={collections}
                                                                    setDiagram={chooseMonth}
                />}/>
                <Route path={'/diagram'} render={props => <Diagrams {...props} item={diagramItem}/>}/>
                {form &&
                <CollectionsList toggle={toggleForm}
                                 addItem={addItem}
                                 changeItem={changeItem}
                                 deleteCollection={deleteItem}
                                 collections={collections}
                                 showForm={showForm}
                                 setShowForm={setShowForm}/>}
            </div>
        </Context.Provider>
    )
}

export default App