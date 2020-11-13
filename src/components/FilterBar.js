import React from 'react'

function FilterBar({ filterList, removeFilter, clearFilter }) {
    return (
        <div className="filterBar">
            <div className="filterContainer">
                { 
                filterList.map( item => {
                return <button key={item}>{item[1]}<span onClick={ (e) => removeFilter(item, e)}>X</span></button>
                })
                }
            </div>
            <div className="filterClear" onClick={clearFilter}>Clear</div>
        </div>
    )
}

export default FilterBar
