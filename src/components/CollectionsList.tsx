import React, { FunctionComponent, useContext, useState } from "react";
import greenbtn from "../img/plusgreen.gif";
import editbtn from "../img/edit-icon.gif";
import deletebtn from "../img/delete-icon.gif";
import CollectionForm from "./CollectionForm";
import { Context } from "../App";

// interface CollectionsListProps {
//   toggle: () => void;
//   addItem: () => void;
//   changeItem: () => void;
//   deleteCollection: () => void;
//   collections: () => void;
//   showForm: () => void;
//   setShowForm: () => void;
// }

interface EditCollectionArg {
  _id?: string;
  prev?: string;
  collection?: string;
}

type EditCollection = {
  (item?: EditCollectionArg): void;
};

const CollectionsList: FunctionComponent = () => {
  const [initialData, setInitialData] = useState<EditCollectionArg>();
  const { setShowForm, showForm, toggle, collections, deleteCollection } =
    useContext(Context);

  const editCollection: EditCollection = (item = {}): void => {
    if (item._id) setInitialData({ ...item, prev: item.collection });
    else setInitialData(item);
    setShowForm("!showForm");
  };

  return (
    <div id={"block"}>
      {showForm && <CollectionForm props={initialData} />}
      <div className={"collection-div"}>
        <button className={"close"} onClick={() => toggle()}>
          X
        </button>
        <div className={"categories-div"}>
          <div className={"center-div"}>
            <h1>Категории</h1>
            <button onClick={() => editCollection()}>
              <img alt={"greenBtn"} src={greenbtn} />
            </button>
          </div>
          <div style={{ overflow: "auto", height: "400px" }}>
            {collections.map((i, index) => (
              <div key={index} className={"center-div"}>
                <h6 className={"header"}>{i.collection}</h6>
                <button onClick={() => editCollection(i)}>
                  <img alt={"editBtn"} src={editbtn} />
                </button>
                <button onClick={() => deleteCollection(i._id)}>
                  <img alt={"deleteBtn"} src={deletebtn} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsList;
