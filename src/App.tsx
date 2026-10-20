import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LevelSelectPage from "./pages/LevelSelectPage";
import GamePage from "./pages/GamePage";
import MILProfilePage from "./pages/MILProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/challenges"
          element={<LevelSelectPage />}
        />

        <Route
          path="/game/:scenarioId"
          element={<GamePage />}
        />

        <Route
          path="/profile"
          element={<MILProfilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;