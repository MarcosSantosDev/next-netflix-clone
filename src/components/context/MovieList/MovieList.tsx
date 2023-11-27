import * as React from 'react';
import { isEmpty } from 'lodash';

import MovieCard from './MovieCard';

type MovieListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: Record<string, any>[];
  title: string;
};

const MovieList: React.FC<MovieListProps> = ({ movies, title }) => {
  if (isEmpty(movies)) {
    return null;
  }

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div>
        <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
