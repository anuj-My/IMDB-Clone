import { Routes, Route } from "react-router-dom";
import Upcoming from "./pages/Upcoming";
import Home from "./pages/Home";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="movie/:id"
          element={
            <h1 style={{ color: "white", fontSize: "5rem" }}>movie detail</h1>
          }
        />
        <Route path="movies/:type" element={<MoviesList />} />
        {/* <Route path="/*" element={<ErrorPage />} />  */}
      </Routes>
    </div>
  );
}

export default App;
