import React from 'react'

export default function SummaryItem({item}) {

    return(
        <div className="column secondary">
            <div><h6>{item.collection}</h6></div>
            <div><h6>{item.monthPrice}</h6></div>
            <div><h6>{item.totalPrice}</h6></div>
        </div>
    )
}