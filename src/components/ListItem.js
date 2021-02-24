import React from "react";

export default function ListItem({item, index}) {

    const collectionName = {
        ways: 'покупки',
        workEat: 'еда на работе',
        drunkEat: "бухалово и гульки",
        buys: "покупки",
        services: "услуги и здоровье"
    }

    return (
        <div className={index % 2 === 0 && 'greyback'}>
            <div className={`purchase-list-item`}>
                <div className={'item-date'}>
                    {item.date}
                </div>
                <div className={'item-description'}>
                    {item.description}
                </div>
                <div className={'item-collection'}>
                    {collectionName[item.collection]}
                </div>
                <div className={'item-price'}>
                    {item.price + ' грн'}
                </div>
            </div>
        </div>
    )
}