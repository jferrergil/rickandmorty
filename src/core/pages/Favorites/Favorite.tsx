import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.scss";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  const handleRemove = (id: any) => {
    let items = JSON.parse(localStorage.getItem("favorites") || "[]");

    items = items.filter((item: any) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(items));

    setFavorites(items);
  };

  return (
    <div className="d-flex flex-wrap favorite-card">
      {favorites.length > 0 ? (
        favorites.map((element) => {
          return (
            <div className="m-3 d-flex flex-column">
              <Link to={`/character/${element["id"]}`}>
                <img
                  className="favorite-image"
                  src={element["image"]}
                  alt={element["image"]}
                />
              </Link>
              <button
                className="btn btn-danger remove"
                onClick={() => handleRemove(element["id"])}
              >
                Eliminar
              </button>
            </div>
          );
        })
      ) : (
        <div className="d-flex m-5">
          <h1>AÚN NO TIENES FAVORITOS</h1>
        </div>
      )}
    </div>
  );
};
