import React from "react"

function Info({ selectedPark, averageRating }) {
    return (
        <div>
            <span>{selectedPark.name}</span>
            <span>{selectedPark.description}</span>
            <span>Average rating: {averageRating}</span>
        </div>
    )
}

export default Info
