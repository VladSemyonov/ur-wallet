import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

export default function PurchaseList(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(props.props.sort((a, b)=> a.date < b.date ? 1 : -1))
    }, [props])

    return (

        <div className={'container'}>
            {list.map((i, index) => <ListItem index={index} key={index} item={i}/>)}
        </div>
    )
}