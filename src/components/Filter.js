import React from 'react'

function Filter(props) {
    const { role, level, languages, tools } = props.filter
    const filterArr = [role, level, languages, tools]
    return (
        <div className="jobFilter">
            {
            filterArr
                .flat()
                .filter( (value) => value )
                .map( (value) => {
                    return <button key={value} className="filterItem" onClick={ (e) => props.addFilter(value,e) }>{value}</button>
                })
            }
        </div>
    )
}

export default Filter
