import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

export default function PurchaseList(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(props.props)
    }, [props])

    return (

        <div className={'container'}>
            {list.map((i, index) => <ListItem key={index} item={i}/>)}
        </div>
    )
}