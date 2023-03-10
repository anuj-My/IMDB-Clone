import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Movie from "./pages/Movie";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";
import MovieListContainer from "./container/MovieListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieListContainer />} />
        <Route path="search" element={<SearchList />} />
        {/* <Route path="/*" element={<ErrorPage />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
