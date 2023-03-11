import React from "react"
import "./hero/hero.css"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"


const Home = () => {
    return(
        <>
            <Hero />
            <AboutCard />
        </>
    )
}

export default Home