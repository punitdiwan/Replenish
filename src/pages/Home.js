import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import HeroImageSection from '../components/HeroImageSection'
import Services from '../components/Services'
import Testinomials from '../components/Testinomials'
import TreatmentCard from '../components/TreatmentCard'


const Home = () => {
    return (
        <div>
            <HeroImageSection></HeroImageSection>
            <About></About>
            <Services></Services>
            <TreatmentCard></TreatmentCard>
            <Testinomials></Testinomials>
            <Footer></Footer>
        </div>
    )
}

export default Home