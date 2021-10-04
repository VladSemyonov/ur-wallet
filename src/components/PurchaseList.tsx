import React, {useEffect, useState, useContext} from "react";
import {Context} from "../App";
import ListItem from "./ListItem";
import icon from '../img/list-arrow.gif'

function PurchaseList({deleteI}) {

    const {purchases, categories} = useContext(Context)
    const [list, setList] = useState([])
    const [showList, setShowList] = useState(false)
    const [filteredItems, setFilteredItems] = useState([])
    const [category, setCategory] = useState('Категория')

    useEffect(() => {
        setList(purchases.sort((a, b) => a.filterDate < b.filterDate ? 1 : -1))
    }, [purchases])

    function sortByCollection(e) {
        let content = e.target.textContent
        setFilteredItems(list.filter(i => i.collectionName === content))
        content === 'Выбери категорию' ? setCategory('Категория') : setCategory(content)
    }

    function toggleList() {
        setShowList(!showList)
    }

    return (
        <div className={'container'}>
            <div style={{color: 'white', marginLeft: '30px'}} className={`purchase-list-item`}>
                <div className={'item-date'}>
                    Дата
                </div>
                <div className={'item-description'}>
                    Описание
                </div>
                <div className={'item-collection'}>
                    <div style={{position: 'relative'}} onClick={toggleList} className={'hiden-menu'}>
                        <div id={'check-collection'}>
                            <p>{category}</p>
                            <img alt={'icon'} src={icon}/>
                        </div>
                        {showList && <ul className={'selector'}>
                            <li style={{boxShadow: '0 0 4px 2px white'}} onClick={sortByCollection}
                            >Выбери категорию
                            </li>
                            {categories.map((i, index) => <li key={index} onClick={sortByCollection}
                            >{i.collection}</li>)}
                        </ul>}
                    </div>
                </div>
                <div className={'item-price'}>
                    Ценна
                </div>
            </div>
            <div className='some-list'>
                {filteredItems.length > 0
                    ? filteredItems.map((i, index) => <ListItem deleteI={deleteI} index={index} key={index} item={i}/>)
                    : list.map((i, index) => <ListItem deleteI={deleteI} index={index} key={index} item={i}/>)}
            </div>
        </div>
    )
}

export default PurchaseList