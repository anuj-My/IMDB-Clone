import { Routes, Route } from "react-router-dom";
import Upcoming from "./pages/Upcoming";
import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/movie:id" element={<Upcoming />} /> */}
        {/* <Route path="/movies:type" element={<Upcoming />} />
        <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
