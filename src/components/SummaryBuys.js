import React, {useEffect, useState} from 'react'

export default function SummaryBuys(props) {

    const [monthData, setMonthData] = useState([])
    const [allData, setAllData] = useState([])

    useEffect(() => {
        let thisMonth = new Date()
        setMonthData(props.props.filter(i => i.month === thisMonth.getMonth()))
        setAllData(props.props)
    }, [props])

    function getSum(arr) {
        return arr.reduce((accumulator, value) => accumulator + Number(value), 0)
    }

    return (
        <div className="summary-div">
            <div className="column">
                <div><h6>период</h6></div>
                <div><h6>за текущий месяц</h6></div>
                <div><h6>за всё время</h6></div>
            </div>
            <div className="column secondary">
                <div><h6>еда на работе</h6></div>
                <div><h6>{getSum(monthData.filter(i => i.collection === 'workEat'))}</h6></div>
                <div><h6>{getSum(allData.filter(i => i.collection === 'workEat'))}</h6></div>
            </div>
            <div className="column secondary">
                <div><h6>бухалово и гульки</h6></div>
                <div><h6>{getSum(monthData.filter(i => i.collection === 'drunkEat'))}</h6></div>
                <div><h6>{getSum(allData.filter(i => i.collection === 'drunkEat'))}</h6></div>
            </div>
            <div className={'column secondary'}>
                <div><h6>еда</h6></div>
                <div><h6>{getSum(monthData.filter(i => i.collection === 'ways'))}</h6></div>
                <div><h6>{getSum(allData.filter(i => i.collection === 'ways'))}</h6></div>
            </div>
            <div className={'column secondary'}>
                <div><h6>покупки</h6></div>
                <div><h6>{getSum(monthData.filter(i => i.collection === 'buys'))}</h6></div>
                <div><h6>{getSum(allData.filter(i => i.collection === 'buys'))}</h6></div>
            </div>
            <div className={'column secondary'}>
                <div><h6>услуги и здоровье</h6></div>
                <div><h6>{getSum(monthData.filter(i => i.collection === 'services'))}</h6></div>
                <div><h6>{getSum(allData.filter(i => i.collection === 'services'))}</h6></div>
            </div>
            <div className={'column'}>
                <div><h6>всего</h6></div>
                <div><h6>{getSum(monthData)}</h6></div>
                <div><h6>{getSum(allData)}</h6></div>
            </div>
        </div>
    )
}