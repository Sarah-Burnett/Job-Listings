import React from 'react'
import Job from './Job'

function JobList({ jobList, addFilter }) {
    return (
        jobList.map( (job) => {
            return <Job job={job} key={job.id} addFilter={addFilter}/>
        })
    )
}

export default JobList
