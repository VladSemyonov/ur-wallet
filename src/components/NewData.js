import React, {useState} from 'react'

export default function NewData({submit}) {

    const [collection, setCollection] = useState('workEat')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    function dataSubmit() {
        let date = new Date()
        let addData = {
            collection: collection,
            price: price,
            description: description,
            month: date.getMonth(),
            date: date.toLocaleString()
        }
        submit(addData)
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
                    <option value="workEat">еда на работе</option>
                    <option value="drunkEat">бухалово и гульки</option>
                    <option value="ways">еда</option>
                    <option value="buys">покупки</option>
                    <option value="services">услуги и здоровье</option>
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
                <button onClick={dataSubmit} type="submit">добавить</button>
            </div>
        </form>
    )
}