import { root } from "./Root";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./Stylesheet.css";
import "./App.css";
import Game from "./pages/Game";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home root={root} />} />
          <Route path="game/:id" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

root.render(<App />);
