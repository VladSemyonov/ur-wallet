import React, {useState, useEffect} from 'react'
import SummaryItem from "./SummaryItem";

export default function SummaryBuys({item}) {

    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(item)
    }, [item])

    function getSummary(arr, col) {
        let sum = 0
        for (let i of arr) {
            sum += i[col]
        }
        return sum
    }

    return (
        <div className="summary-div">
            <div className="column">
                <div><h6>период</h6></div>
                <div><h6>за текущий месяц</h6></div>
                <div><h6>за всё время</h6></div>
            </div>
            <div className={'auto-div'}>
                {items.map((i, index) => <SummaryItem key={index} item={i}/>)}
            </div>
            <div className={'column'}>
                <div><h6>всего</h6></div>
                <div><h6>{getSummary(items, 'monthPrice')}</h6></div>
                <div><h6>{getSummary(items, 'totalPrice')}</h6></div>
            </div>
        </div>
    )
}