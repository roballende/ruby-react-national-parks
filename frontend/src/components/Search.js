import React, { useState } from "react"

function Search({ parks, setParkID }) {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    // FILTER DROPDOWN RESULTS
    const onSearchChange = (currentSearch) => {
        setSearch(currentSearch)
        const filteredResults = parks.filter((park) =>
            park.name.toLowerCase().includes(search.toLowerCase())
        )
        setResults(filteredResults)
    }

    // SELECT PARK & SET ID
    const onInputChange = (e) => {
        const selectedPark = parks.find((park) => park.name === e.target.value)
        setParkID(selectedPark.id)
    }

    return (
        <div>
            SEARCHBAR
            <form>
                <input
                    type='text'
                    name='search'
                    placeholder='Search...'
                    autoComplete='off'
                    list='results'
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onInput={onInputChange}
                />
                <datalist id='results'>
                    {results.map((park, index) => (
                        <option key={index} value={park.name} />
                    ))}
                </datalist>
            </form>
        </div>
    )
}

export default Search
