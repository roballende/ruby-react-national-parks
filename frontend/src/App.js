import "./App.css"
import Search from "./components/Search"
import Info from "./components/Info"
import Reviews from "./components/Reviews"
import Form from "./components/Form"
import Map from "./components/Map"
import ImageGallery from "./components/ImageGallery"
import React, { useState, useEffect } from "react"

function App() {
    // SET STATE FOR ALL PARKS
    const [parks, setParks] = useState([])

    // SET ID FOR SELECTED PARK
    const [parkID, setParkID] = useState(2)

    // SET SELECTED PARK
    const [selectedPark, setSelectedPark] = useState({})

    // SET AVG RATINGS
    const [averageRating, setAverageRating] = useState(0)

    // FETCH ALL PARKS
    useEffect(() => {
        fetch("http://localhost:9292/parks")
            .then((r) => r.json())
            .then((data) => setParks(data))
    }, [])

    // FETCH SELECTED PARK
    useEffect(() => {
        fetch(`http://localhost:9292/parks/${parkID}`)
            .then((r) => r.json())
            .then((data) => setSelectedPark(data))
    }, [parkID])

    // FETCH PARK REVIEWS

    // FETCH PARK AVG RATING
    useEffect(() => {
        fetch(`http://localhost:9292/parks/${parkID}/average_rating`)
            .then((res) => res.json())
            .then((data) => setAverageRating(data))
    }, [parkID])

    // POST PARK REVIEW / RATING

    // PATCH PARK REVIEW / RATING

    // DELETE PARK REVIEW / RATING

    return (
        <div className='App'>
            <Search parks={parks} setParkID={setParkID} />
            <Info selectedPark={selectedPark} averageRating={averageRating}/>
            <Reviews />
            <Form />
            <Map />
            <ImageGallery />
        </div>
    )
}

export default App
