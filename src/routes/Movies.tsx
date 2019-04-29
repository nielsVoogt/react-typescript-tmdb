import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import MovieCard from '../components/MovieCard'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

type Movie = {
  title: string
  vote_average: number
  // year: number
  // id: number
}

const Movies: React.FunctionComponent<RouteComponentProps> = () => {
  const url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${
    process.env.REACT_APP_TMDB_API_KEY
  }&language=en-US&region=NL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  let movies

  async function getMovies(): Promise<any> {
    try {
      const response = await axios.get(url)
      movies = response.data.results.map((movie: Movie) => {
        let { title, vote_average } = movie
        return { title, vote_average }
      })
      console.log(movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  })

  return (
    <div>
      <MovieCard title="MovieTitle" rating={7} year={2018} id={1} />
    </div>
  )
}

export default Movies
