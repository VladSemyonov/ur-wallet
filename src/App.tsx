import React, { ReactPropTypes, useEffect, useState } from "react";
import "./index.css";
import CollectionsList from "./components/CollectionsList";
import TopNavigation from "./components/TopNavigation";
import Statistics from "./components/Statistics";
import { Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Diagrams from "./components/Diagrams";
import { AppContextProps, DataItem } from "./types/common";
import { CollectionItem } from "./types/common";
import { makeAutoObservable } from "mobx";

const Context: any = React.createContext({});
export { Context };

var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile1", autoload: true });

function App() {
  const [properts, setProperts] = useState<DataItem[]>([]);
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [sums, setSums] = useState<CollectionItem[]>([]);
  const [form, setForm] = useState<Boolean>(false);
  const [diagramItem, setDiagramItem] = useState<CollectionItem[]>();
  const [showDiagram, setShowDiagram] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  let secs = { secs: 0 };
  makeAutoObservable(secs);

  setInterval(() => {
    secs.secs += 1;
  }, 1000);

  useEffect(() => {
    startDb();
  }, []);

  useEffect(() => {
    getSums();
  }, [collections]);

  function addItem(item: any): void {
    db.insert(item);
    setShowForm(false);
    startDb();
  }

  function deleteItem(id: number): void {
    db.remove({ _id: id });
    startDb();
    getSums();
  }

  function startDb(): void {
    db.find(
      { collectionName: { $exists: true } },
      function (err: string, docs: DataItem[]): void {
        if (!err) {
          setProperts(docs);
        }
      }
    );
    db.find(
      { collection: { $exists: true } },
      function (err: string, docs: CollectionItem[]): void {
        if (!err) {
          setCollections(docs);
        }
      }
    );
  }

  function getSums(): void {
    let thisMonth: number = new Date().getMonth();
    let sum: CollectionItem[] = [];
    for (const { collection } of collections) {
      sum = [
        ...sum,
        {
          collection: collection,
          monthPrice: 0,
          totalPrice: 0,
        },
      ];
    }
    for (const { collectionName, price, month } of properts) {
      if (month === thisMonth) {
        for (let i of sum) {
          if (collectionName === i.collection) {
            i.monthPrice += Number(price);
            i.totalPrice += Number(price);
          }
        }
      } else {
        for (let i of sum) {
          if (collectionName === i.collection) {
            i.totalPrice += Number(price);
          }
        }
      }
      setSums(sum);
    }
  }

  function changeItem(item: any): void {
    db.update({ _id: item._id }, { $set: { collection: item.collection } });
    db.update(
      { collectionName: item.prev },
      { $set: { collectionName: item.collection } }
    );
    setShowForm(false);
    startDb();
  }

  function toggleForm(): void {
    setForm(!form);
  }

  const chooseMonth = (i: number) => {
    let sum: any = [];
    let arr = properts.filter((item) => item.month === i);
    for (const { collection } of collections) {
      sum = [
        ...sum,
        {
          collection: collection,
          totalPrice: 0,
        },
      ];
    }
    for (const { collectionName, price } of arr) {
      for (let i of sum) {
        if (collectionName === i.collection) {
          i.totalPrice += Number(price);
        }
      }
    }
    setDiagramItem(sum);
    setShowDiagram(true);
    setShowDiagram(false);
  };

  return (
    <Context.Provider
      value={{
        purchases: properts,
        categories: collections,
        toggle: toggleForm,
        addItem: addItem,
        changeItem: changeItem,
        deleteCollection: deleteItem,
        collections: collections,
        showForm: showForm,
        setShowForm: setShowForm,
        deleteI: deleteItem,
      }}
    >
      <div className={"container"}>
        {showDiagram && <Redirect to={"/diagram"} />}
        <TopNavigation toggleForm={toggleForm} />
        <Route exact path={"/"}>
          <Main addItem={addItem} sums={sums} />
        </Route>
        <Route path={"/stats"}>
          <Statistics
            items={properts}
            collections={collections}
            setDiagram={chooseMonth}
          />
        </Route>
        <Route path={"/diagram"}>
          <Diagrams item={diagramItem} />
        </Route>
        {form && <CollectionsList />}
      </div>
    </Context.Provider>
  );
}

export default App;
