import { Route, Routes } from "react-router-dom";
import { CharacterDetail } from "../pages/CharacterDetail/CharacterDetail";
import { Favorites } from "../pages/Favorites/Favorite";
import { CardWrapper } from "../pages/Home/CardWrapper";
import "./App.scss";

function App() {
  return (
    <>
      <h1 className="main-title">
        <u>Rick & Morty APP</u>
      </h1>
      <Routes>
        <Route path="/" element={<CardWrapper />} />
        <Route path="character/:id" element={<CharacterDetail />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
