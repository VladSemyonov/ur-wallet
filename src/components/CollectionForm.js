import React, {useEffect, useState} from 'react'

export default function CollectionForm({props, addItem, changeItem}) {

    const [collectionValue, setCollection] = useState({collection: ''})

    useEffect(() => {
        if (props)
            setCollection(props)
    }, [])

    function changeValue(e) {
        setCollection({...collectionValue, collection: e.target.value})
    }

    function setData() {
        if (collectionValue.hasOwnProperty("_id")) {
            changeItem(collectionValue)
        } else {
            addItem(collectionValue)
        }
    }

    return (
        <form className={"collection-form"}>
            <div className={'add-form-div'}>
                <input type={'text'}
                       name={'collection'}
                       onChange={changeValue}
                       value={collectionValue.collection}
                        className={'innumber'}/>
            </div>
            <div className={'add-form-div'}>
                <button type={'button'}
                        onClick={setData}>Сохранить
                </button>
            </div>
        </form>
    )
}