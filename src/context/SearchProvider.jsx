import { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState(null);

  const getMovieBySearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US&query=${searchInput}&page=1&include_adult=false`
      );

      setSearchList(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getMovieBySearch();
  };

  const value = {
    searchInput,
    setSearchInput,
    searchList,
    setSearchList,
    onChangeHandler,
    submitHandler,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
