import React from "react";

export default function ListItem({item, deleteI, index}) {

    function getClass(num) {
        if (num % 2 === 0) return 'greyback'
    }

    function getClass1(num) {
        if (num % 2 === 0) return 'blackback'
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
                    <button
                            onClick={() => {
                        deleteI(item._id)
                    }} className={`danger-btn ${getClass1(index)}`}>X
                    </button>
                </div>
            </div>
        </div>
    )
}