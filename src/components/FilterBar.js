import React from 'react'

function FilterBar(props) {
    return (
        <div className="filterBar">
            <div className="filterContainer">
                { 
                props.filterList.map( item => {
                return <button key={item}>{item}<span onClick={ (e) => props.removeFilter(item, e)}>X</span></button>
                })
                }
            </div>
            <div className="filterClear" onClick={props.clearFilter}>Clear</div>
        </div>
    )
}

export default FilterBar
