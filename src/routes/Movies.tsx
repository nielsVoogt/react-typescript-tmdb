
import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import MovieCard from '../components/MovieCard'
import axios from 'axios';

const Movies: React.FunctionComponent<RouteComponentProps> = () => {

    const apiKey = process.env.REACT_APP_TMDB_API_KEY

    return (
        <div>
            <MovieCard
                title="MovieTitle"
                rating={7}
                year={2018}
                id={1}
            />
        </div>
    );
};

export default Movies