import React from 'react'
import Job from './Job'

function JobList(props) {
    return (
        props.jobList.map( (job) => {
            return <Job job={job} key={job.id} addFilter={props.addFilter}/>
        })
    )
}

export default JobList
