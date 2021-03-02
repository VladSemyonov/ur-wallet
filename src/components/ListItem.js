import React from "react";
import inage from '../img/delete.gif'

export default function ListItem({item, deleteI, index}) {

    function getClass(num) {
        if (num % 2 === 0) return 'greyback'
    }

    return (
        <div style={{width: "960px", padding: "0 10px"}} className={getClass(index)}>
            <div className={`purchase-list-item`}>
                <div className={'item-date'}>
                    {item.date}
                </div>
                <div className={'item-description'}>
                    {item.description}
                </div>
                <div className={'item-collection'}>
                    {item.collectionName}
                </div>
                <div className={'item-price'}>
                    {item.price + ' грн'}
                </div>
                <div style={{marginRight: "0"}}>
                    <button onClick={() => {
                        deleteI(item._id)
                    }} className={'danger-btn'}>
                        <img style={{width: '30px'}} src={inage}/>
                    </button>
                </div>
            </div>
        </div>
    )
}