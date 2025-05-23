import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/index";
import NotFound from "./pages/not-found/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
