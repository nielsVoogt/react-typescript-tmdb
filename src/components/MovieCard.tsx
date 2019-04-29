
import * as React from 'react';

interface Props {
    title: string;
    rating: number,
    year: number,
    id: number
}

const MovieCard: React.FunctionComponent<Props> = (props) => {

    const { title, rating, year } = props; 

    return (
        <div>
            <h1>{title}</h1>
            <h3>{rating}</h3>
            <p>{year}</p>            
        </div>
    );
};

export default MovieCard