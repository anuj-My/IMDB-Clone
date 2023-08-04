import { Routes, Route } from "react-router-dom";
import { HashLoader } from "react-spinners";

import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";
import MoviesPage from "./pages/MoviesPage";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader
        color="#dc0000"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MoviesPage />} />
        <Route path="search" element={<SearchList />} />
        {/* <Route path="/*" element={<ErrorPages />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
