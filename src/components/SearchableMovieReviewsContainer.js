import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
        constructor() {
            super()
            this.state = {

            }
        }

        render() {
            return (
                <div>
                    <MovieReviews />
                </div>
            )
        }
}