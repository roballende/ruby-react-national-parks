import "./App.css"
import Search from "./components/Search"
import React, { useState, useEffect } from "react"

function App() {
    // SET STATE FOR ALL PARKS
    const [parks, setParks] = useState([])

    // SET ID FOR SELECTED PARK
    const [parkID, setParkID] = useState(2)

    // SET SELECTED PARK
    const [selectedPark, setSelectedPark] = useState({})

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

    // FETCH PARK RATINGS

    // FETCH PARK FAV STATUS

    return (
        <div className='App'>
            <Search parks={parks} setParkID={setParkID} />
            {selectedPark.name}
            {selectedPark.description}
        </div>
    )
}

export default App
