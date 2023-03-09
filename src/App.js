import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Movie from "./pages/Movie";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MoviesList />} />
        <Route
          path="search"
          element={
            <SearchList />
          }
        />
        {/* <Route path="/*" element={<ErrorPage />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
