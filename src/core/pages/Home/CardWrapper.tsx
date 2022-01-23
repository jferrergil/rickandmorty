import { useState } from "react";
import { Card } from "../../../shared/components/Card/Card";
import { useFetchSearchCharacter } from "../../../shared/hooks/useFetchSearchCharacter";
import "./CardWrapper.scss";

export const CardWrapper = () => {
  const [characterName, setCharacterName] = useState("");
  const [page, setPage] = useState(1);
  const { characters } = useFetchSearchCharacter(characterName, page);

  const handlePageChange = (pageNumber: number) => {
    setPage(page + pageNumber);
  };

  const handleCharacterName = (characterName: string) => {
    setCharacterName(characterName);
  };

  return (
    <div className="mt-5">
      <div className="button-container m-3 ">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(-1)}
        >
          {"<< Página anterior"}
        </button>
        <div className="input-group input-search">
          <span className="input-group-text" id="basic-addon1">
            Buscar:
          </span>
          <input
            onChange={(e) => handleCharacterName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Buscar personaje"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(1)}
        >
          {"Página siguiente >>"}
        </button>
      </div>
      <div className="card-wrapper">
        {characters.map((character: any) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <div className="button-container m-3 ">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(-1)}
        >
          {"<< Página anterior"}
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(1)}
        >
          {"Página siguiente >>"}
        </button>
      </div>
    </div>
  );
};
