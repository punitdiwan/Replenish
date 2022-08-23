import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import CarouselSection from '../components/CarouselSection'
import Services from '../components/Services'
import Testinomials from '../components/Testinomials'
import TreatmentCard from '../components/TreatmentCard'


const Home = () => {
    return (
        <div>
            <CarouselSection></CarouselSection>
            <About></About>
            <Services></Services>
            <TreatmentCard></TreatmentCard>
            <Testinomials></Testinomials>
            <Footer></Footer>
        </div>
    )
}

export default Home