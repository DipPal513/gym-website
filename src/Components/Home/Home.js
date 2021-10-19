import React from 'react'
import Services from '../Services/Services'
import Banner from './Banner/Banner'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services quantity = {6}/>
        </div>
    )
}

export default Home
