import React from 'react'

function Filter({ filter, addFilter }) {
    let filterArr = [];
    for (let item in filter) {
        if (!Array.isArray(filter[item])) {
            const arr = [item, filter[item]];
            filterArr.push(arr);
       } else {
           for (let i = 0; i < filter[item].length; i++) {
               const arr = [item, filter[item][i]];
               filterArr.push(arr);
           }
       }
   }
    return (
        <div className="jobFilter">
            {
            filterArr
                .map( (item) => {
                    return <button key={item} className="filterItem" onClick={ (e) => addFilter(item,e) }>{item[1]}</button>
                })
            }
        </div>
    )
}

export default Filter
