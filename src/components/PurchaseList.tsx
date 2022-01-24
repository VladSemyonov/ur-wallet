import React, { useEffect, useState, useContext, FC } from "react";
import { Context } from "../App";
import ListItem from "./ListItem";
import icon from "../img/list-arrow.gif";

interface ItemList {
  collectionName: string;
  price: number;
  description: string;
  month: number;
  date: string;
  filterDate: number;
}

interface CollectionItem {
  collection: string;
}

const PurchaseList: FC = () => {
  const { purchases, categories } = useContext(Context);
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("Категория");

  useEffect(() => {
    setList(
      purchases.sort((a: ItemList, b: ItemList) =>
        a.filterDate < b.filterDate ? 1 : -1
      )
    );
  }, [purchases]);

  function sortByCollection(e: any) {
    console.log(typeof e);
    let content = e.target.textContent;
    setFilteredItems(
      list.filter((i: ItemList) => i.collectionName === content)
    );
    content === "Выбери категорию"
      ? setCategory("Категория")
      : setCategory(content);
  }

  function toggleList() {
    setShowList(!showList);
  }

  return (
    <div className={"container"}>
      <div
        style={{ color: "white", marginLeft: "30px" }}
        className={`purchase-list-item`}
      >
        <div className={"item-date"}>Дата</div>
        <div className={"item-description"}>Описание</div>
        <div className={"item-collection"}>
          <div
            style={{ position: "relative" }}
            onClick={toggleList}
            className={"hiden-menu"}
          >
            <div id={"check-collection"}>
              <p>{category}</p>
              <img alt={"icon"} src={icon} />
            </div>
            {showList && (
              <ul className={"selector"}>
                <li
                  style={{ boxShadow: "0 0 4px 2px white" }}
                  onClick={sortByCollection}
                >
                  Выбери категорию
                </li>
                {categories.map((i: CollectionItem, index: number) => (
                  <li key={index} onClick={sortByCollection}>
                    {i.collection}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={"item-price"}>Ценна</div>
      </div>
      <div className="some-list">
        {filteredItems.length > 0
          ? filteredItems.map((i, index) => (
              <ListItem index={index} key={index} item={i} />
            ))
          : list.map((i, index) => (
              <ListItem index={index} key={index} item={i} />
            ))}
      </div>
    </div>
  );
};

export default PurchaseList;
