import React, {useState} from 'react'
import greenbtn from "../img/plusgreen.gif"
import editbtn from "../img/edit-icon.gif"
import deletebtn from "../img/delete-icon.gif"
import CollectionForm from "./CollectionForm";

export default function CollectionsList(props) {

    const [initialData, setInitialData] = useState()
    const [showForm, setShowForm] = useState(false)

    function close() {
        let item = document.getElementById('block')
        item.style.display = 'none'
    }

    function editCollection(item={}) {
        setInitialData(item)
        setShowForm(!showForm)
    }

    return (
        <div id={'block'}>
            {showForm && <CollectionForm addItem={props.addItem} changeItem={props.changeItem} props={initialData}/>}
            <div className={'collection-div'}>
                <button className={'close'} onClick={()=>props.toggle()}>X</button>
                <div className={'categories-div'}>
                    <div className={'center-div'}>
                        <h1>Категории</h1>
                        <button onClick={()=>editCollection()}><img src={greenbtn}/></button>
                    </div>
                    <div style={{overflow: 'auto'}}>
                        {props.collections.map((i, index) =>
                            <div key={index} className={'center-div'}>
                                <h6 className={'header'}>{i.collection}</h6>
                                <button onClick={()=>editCollection(i)}><img src={editbtn}/></button>
                                <button onClick={()=>props.deleteCollection(i._id)}><img src={deletebtn}/></button>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}