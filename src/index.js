import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import fullJobList from './data.json';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';

function App() {
  const [ jobList, setJobList ] = useState(fullJobList);
  const [ filterList, setFilterList ] = useState([]);

  const addFilter = (item) => {
    if (!filterList.includes(item)) {
      setFilterList( filterList.concat([item]));
      setJobList( jobList.filter( (job) => job.hasOwnProperty(item[0]) && job[item[0]].includes(item[1]) ))
    }
  }

  const removeFilter = (item) => {
    const newFilterList = filterList.filter( e => e !== item);
    setFilterList( newFilterList);
    let newJobList = fullJobList;
    for (let i = 0; i < newFilterList.length; i++){
      newJobList = newJobList
        .filter( (job) => job.hasOwnProperty(newFilterList[i][0]))
        .filter( (job) => job[newFilterList[i][0]].includes(newFilterList[i][1]))
      };
    setJobList (newJobList)
  }

  const clearFilter = () => {
    setFilterList([]);
    setJobList(fullJobList);
  }

  return (
    <div className="App">
      <Header/>
      <FilterBar filterList={filterList} clearFilter={clearFilter} removeFilter={removeFilter}/>
      <JobList jobList={jobList} addFilter={addFilter}/>
    </div>
  );
}

//prop types 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);