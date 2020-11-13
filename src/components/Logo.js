import React from 'react'
import Photosnap from '../images/logos/photosnap.svg'
import Manage from '../images/logos/manage.svg'
import Account from '../images/logos/account.svg'
import MyHome from '../images/logos/myhome.svg'
import LoopStudios from '../images/logos/loop-studios.svg'
import FaceIt from '../images/logos/faceit.svg'
import Shortly from '../images/logos/shortly.svg'
import Insure from '../images/logos/insure.svg'
import EyecamCo from '../images/logos/eyecam-co.svg'
import AirFilterCompany from '../images/logos/the-air-filter-company.svg'


function Logo({ company }) {
    return (
        <div className="jobLogo">
            {company === "Photosnap" && <img src={Photosnap} alt="company logo"/>}
            {company === "Manage" && <img src={Manage} alt="company logo"/>}
            {company === "Account" && <img src={Account} alt="company logo"/>}
            {company === "MyHome" && <img src={MyHome} alt="company logo"/>}
            {company === "Loop Studios" && <img src={LoopStudios} alt="company logo"/>}
            {company === "FaceIt" && <img src={FaceIt} alt="company logo"/>}
            {company === "Shortly" && <img src={Shortly} alt="company logo"/>}
            {company === "Insure" && <img src={Insure} alt="company logo"/>}
            {company === "Eyecam Co." && <img src={EyecamCo} alt="company logo"/>}
            {company === "The Air Filter Company" && <img src={AirFilterCompany} alt="company logo"/>}
        </div>
    )
}

export default Logo

//{require(`.${props.logo}`)}
//{props.logo}
//