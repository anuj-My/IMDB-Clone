import { createContext, useState } from "react";

export const MovieListContext = createContext();

const MovieListProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);

  const value = { movieList, setMovieList };
  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};

export default MovieListProvider;
