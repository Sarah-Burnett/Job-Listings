import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import jobs from './data.json';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';

function App() {
  const [ jobList, setJobList ] = useState(jobs);
  const [ filterList, setFilterList ] = useState([]);

  useEffect( () => {console.log( jobList); console.log( filterList)});

  const addFilter = (value) => {
    const prop = findProp(value);
    if (!filterList.includes(value)) {
      setFilterList( filterList.concat([value]));
      setJobList( filterJobs(prop, value, jobList))
    }
  }

  const removeFilter = (value) => {
    setFilterList(filterList.filter( item => item !== value));
    setJobList( jobs);
  }

  const findProp = (value) => {
      let prop = "";
      jobList.find( (job) => {
        if (job.hasOwnProperty("role") && job["role"] === value) {
          prop = "role"
        }
        if (job.hasOwnProperty("level") && job["level"] === value) {
          prop = "level"
        }
        if (job.hasOwnProperty("languages") && job["languages"].includes(value)) {
          prop = "languages"
        }
        if (job.hasOwnProperty("tools") && job["tools"].includes(value)) {
          prop = "tools"
        }
      })
      return prop;
  }

  const filterJobs = (prop, value) => {
    return jobList
      .filter( (job) => job.hasOwnProperty(prop) )
      .filter( (job) => job[prop].includes(value) )
  }

  const clearFilter = () => {
    setFilterList([]);
    setJobList(jobs);
  }

  //console.log(filterJobs("languages", "JavaScript", jobList))

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