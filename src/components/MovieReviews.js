// Code MovieReviews Here
import React from 'react';


const MovieReviews = (props) => {

    return (
    
        <div className="review-list">
            <p className="review">{props.reviewData}</p>
        </div>
    
    )

}



export default MovieReviews;