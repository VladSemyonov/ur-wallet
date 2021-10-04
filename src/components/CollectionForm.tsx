import React, { useEffect, useState, FunctionComponent } from "react";
import { DataItem } from "../types/common";

interface CollectionFormProps {
  props?: CollectionData;
  addItem: (item: DataItem) => void;
  changeItem: (item: DataItem) => void;
}

interface CollectionData {
  collection: string;
}

const CollectionForm: FunctionComponent<CollectionFormProps> = ({
  props,
  addItem,
  changeItem,
}) => {
  const [collectionValue, setCollection] = useState<CollectionData>({
    collection: "",
  });

  useEffect(() => {
    if (props) setCollection(props);
  }, []);

  function changeValue(e: React.FormEvent<HTMLInputElement>) {
    setCollection({ ...collectionValue, collection: e.target.value });
  }

  function setData() {
    if (collectionValue.hasOwnProperty("_id")) {
      changeItem(collectionValue);
    } else {
      addItem(collectionValue);
    }
  }

  return (
    <form className={"collection-form"}>
      <div className={"add-form-div"}>
        <input
          type={"text"}
          name={"collection"}
          onChange={changeValue}
          value={collectionValue.collection}
          className={"innumber"}
        />
      </div>
      <div className={"add-form-div"}>
        <button type={"button"} onClick={setData}>
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default CollectionForm;
