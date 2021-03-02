import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

export default function PurchaseList({items, deleteI}) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(items.sort((a, b) => a.filterDate < b.filterDate ? 1 : -1))
    }, [items])

    return (

        <div className={'container some-list'}>
            {list.map((i, index) => <ListItem deleteI={deleteI} index={index} key={index} item={i}/>)}
        </div>
    )
}