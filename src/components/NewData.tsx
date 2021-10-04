import React, {useState, useContext} from 'react'
import {Context} from "../App";

export default function NewData({submit}) {

    const {categories} = useContext(Context)
    const [collection, setCollection] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    function dataSubmit(e) {
        e.preventDefault()
        let date = new Date()
        let addData = {
            collectionName: collection,
            price: price,
            description: description,
            month: date.getMonth(),
            date: date.toLocaleString(),
            filterDate: Date.now()
        }
        submit(addData)
        setPrice('')
        setDescription('')
    }

    const changeValue = (data, fn) => ({target}) => {
        if (target.name === 'select')
            return fn(target.value)

        return fn(target.value)
    }

    return (
        <form className="add-form">
            <div>
                <select className="inselect"
                        name="select"
                        onChange={changeValue(collection, setCollection)}>
                    <option value={''}>Выбери категорию</option>
                    {categories && categories.map((item, i) => <option value={item.collection}
                                                                       key={i}>{item.collection}</option>)}
                </select>
            </div>
            <div className="">
                <input className={'innumber'}
                       type="number"
                       value={price}
                       placeholder="стоимость"
                       onChange={changeValue(price, setPrice)}/>
            </div>
            <div className="description">
                <input type="text"
                       value={description}
                       placeholder="описание"
                       onChange={changeValue(description, setDescription)}/>
            </div>
            <div className="btn">
                <button disabled={(price.length && description.length && collection.length) === 0} onClick={dataSubmit}
                        type="submit">добавить
                </button>
            </div>
        </form>
    )
}