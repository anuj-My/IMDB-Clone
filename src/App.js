import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MoviesPage />} />
        <Route path="search" element={<SearchList />} />
        {/* <Route path="/*" element={<ErrorPage />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
