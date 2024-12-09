import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Board from '../components/Board'
import FAQ from '../components/FAQ'
import Contactus from '../pages/ContactUs'

export default function Home() {
    return (
        <div>
            <Hero />
            <Carousel/>
            <Board/>
            <About />
            <FAQ/>
            <Contactus/>
        </div>
    )
}

