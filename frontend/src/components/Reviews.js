import React from "react"

function Reviews({ parkReviews }) {

    const reviews = Object.values(parkReviews)
    // let reviewsArray = []
    // reviewsArray = [parkReviews]
    // console.log(reviewsArray)

    return (
        <div>
            <h4>REVIEWS</h4>
            <div>
                {reviews.map((review) => (
                    <div>
                        <div>User: {review.user.name}</div>
                        <div>Comment: {review.comment} </div>
                        <div>Rating: {review.rating}</div>
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews
