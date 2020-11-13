import React from 'react'
import Logo from './Logo'
import Filter from './Filter'

function Job(props) {
    const { id, logo, position, company, new: newJob, featured, contract, location, postedAt, ...filter } = props.job
    return (
        <div className="job">
            <Logo company={company} key={id}/>
            <div className="jobInfo">
                <div className="jobInfo1"> 
                    {company} {newJob && <span className="new">NEW!</span>} {featured && <span className="featured">FEATURED</span>}
                </div>
                <div className="jobInfo2">
                    {position}
                </div>
                <div className="jobInfo3">
                    {postedAt} &middot; {contract} &middot; {location} 
                </div>
            </div>
            <Filter filter={filter} key={company} addFilter={props.addFilter}/>
        </div>
    )
}

export default Job