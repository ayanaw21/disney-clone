import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {

  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=5&&(
            <div className='p-3 px-8 md:px-16'>
                <h2 className='text-[20px] font-bold'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList