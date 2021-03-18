import React, {useState} from 'react'
import greenbtn from "../img/plusgreen.gif"
import editbtn from "../img/edit-icon.gif"
import deletebtn from "../img/delete-icon.gif"
import CollectionForm from "./CollectionForm";

export default function CollectionsList(props) {

    const [initialData, setInitialData] = useState()

    function editCollection(item = {}) {
        if (item._id)
            setInitialData({...item, prev: item.collection})
        else setInitialData(item)
        props.setShowForm('!showForm')
    }

    return (
        <div id={'block'}>
            {props.showForm &&
            <CollectionForm addItem={props.addItem} changeItem={props.changeItem} props={initialData}/>}
            <div className={'collection-div'}>
                <button className={'close'} onClick={() => props.toggle()}>X</button>
                <div className={'categories-div'}>
                    <div className={'center-div'}>
                        <h1>Категории</h1>
                        <button onClick={() => editCollection()}><img alt={'greenBtn'} src={greenbtn}/></button>
                    </div>
                    <div style={{overflow: 'auto', height: '400px'}}>
                        {props.collections.map((i, index) =>
                            <div key={index} className={'center-div'}>
                                <h6 className={'header'}>{i.collection}</h6>
                                <button onClick={() => editCollection(i)}><img alt={'editBtn'} src={editbtn}/>
                                </button>
                                <button onClick={() => props.deleteCollection(i._id)}><img alt={'deleteBtn'}
                                                                                           src={deletebtn}/>
                                </button>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}