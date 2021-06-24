import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'j5hOw1EqAu2ElQconc7AaJH1PWMwIeRZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
        constructor() {
            super()
            this.state = {
                reviews: []
            }

        }

        componentDidMount() {
            fetch(URL)
            .then(response => response.json())
            .then(reviewData => {
                this.setState({
                    reviews: [...reviewData.results]
                })
            })
                
        }

        renderReviews() {
           return  this.state.reviews.map((review) => {
                      
                return <MovieReviews key={review.date_updated} reviewData={review.headline} />;
              })
        }

        render() {
            return (
                <div className="latest-movie-reviews">
                    {this.state.reviews ? this.renderReviews() : null}
                    
                </div>
            )
        }
}

