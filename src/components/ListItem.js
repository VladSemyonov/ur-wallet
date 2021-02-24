import React from "react";

export default function ListItem({item}) {

    return (
        <div>
            <div className={'purchase-list-item'}>
                <div className={'item-date'}>
                    {item.date}
                </div>
                <div className={'item-description'}>
                    {item.description}
                </div>
                <div className={'item-collection'}>
                    {item.collection}
                </div>
                <div className={'item-price'}>
                    {item.price + ' грн'}
                </div>
            </div>
        </div>
    )
}