import { useState, useContext, FC } from "react";
import { Context } from "../App";
import * as React from "react";

interface NewData {
  collectionName: string;
  price: number;
  description: string;
  month: number;
  date: string;
  filterDate: number;
  _id?: string;
}

interface PropsItem {
  collection: string;
}

interface Props {
  submit: (arg0: NewData) => void;
}

const NewData: FC<Props> = ({ submit }) => {
  const { categories } = useContext(Context);
  const [collection, setCollection] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  function dataSubmit(e: any) {
    e.preventDefault();
    let date = new Date();
    let addData: NewData = {
      collectionName: collection,
      price: price,
      description: description,
      month: date.getMonth(),
      date: date.toLocaleString(),
      filterDate: Date.now(),
    };
    submit(addData);
    setPrice(0);
    setDescription("");
  }

  const changeValue =
    (data: string | number, fn: any) =>
    ({ target }: any): void => {
      if (target.name === "select") return fn(target.value);

      return fn(target.value);
    };

  return (
    <form className="add-form">
      <div>
        <select
          className="inselect"
          name="select"
          onChange={changeValue(collection, setCollection)}
        >
          <option value={""}>Выбери категорию</option>
          {categories &&
            categories.map((item: PropsItem, i: number) => (
              <option value={item.collection} key={i}>
                {item.collection}
              </option>
            ))}
        </select>
      </div>
      <div className="">
        <input
          className={"innumber"}
          type="number"
          value={price}
          placeholder="стоимость"
          onChange={changeValue(price, setPrice)}
        />
      </div>
      <div className="description">
        <input
          type="text"
          value={description}
          placeholder="описание"
          onChange={changeValue(description, setDescription)}
        />
      </div>
      <div className="btn">
        <button
          disabled={
            (price === 0 && description.length && collection.length) === 0
          }
          onClick={dataSubmit}
          type="submit"
        >
          добавить
        </button>
      </div>
    </form>
  );
};

export default NewData;
