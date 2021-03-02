import React, {useEffect, useState} from 'react'

export default function CollectionForm({props, addItem, changeItem}) {

    const [collectionValue, setCollection] = useState({collection: ''})
console.log(props, collectionValue)

    useEffect(()=>{
        if(props)
    setCollection(props)}, [])

    function changeValue(e) {
        setCollection({...collectionValue, collection: e.target.value})
    }

    function setData() {

        if(collectionValue.collection.hasOwnProperty("_id")){
            changeItem(collectionValue)

            console.log(1)}
        else {
            addItem(collectionValue)
            console.log(2)
        }
    }

    return(
        <form>
            <div>
                <input type={'text'}
                        name={'collection'}
                        onChange={changeValue}
                        value={collectionValue.collection}/>
                <button type={'button'}
                        onClick={setData}>Сохранить</button>
            </div>
        </form>
    )
}