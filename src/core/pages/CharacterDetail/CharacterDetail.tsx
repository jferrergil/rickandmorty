import { useParams } from "react-router-dom";
import { UseFetchCharacter } from "../../../shared/hooks/useFetchCharacter";
import "./CharacterDetail.scss";

export const CharacterDetail = () => {
  const params = useParams();
  const { data } = UseFetchCharacter(params.id as any);

  const handleGoBack = () => {
    window.history.back();
  };
  const handleFavorite = () => {
    let characterArray: any[] = [];
    let uniqueCharactersArray = [];
    let uniqueObject: any = {};
    if (localStorage.getItem("favorites")) {
      characterArray = JSON.parse(localStorage.getItem("favorites") || "[]");
    }
    characterArray = [...characterArray, data];

    for (let i in characterArray) {
      let objTitle = characterArray[i]["name"];
      uniqueObject[objTitle] = characterArray[i];
    }

    for (let i in uniqueObject) {
      uniqueCharactersArray.push(uniqueObject[i]);
    }

    localStorage.setItem("favorites", JSON.stringify(uniqueCharactersArray));
  };

  if (!data) return <div>Loading...</div>;

  const { name, status, species, image, gender, episode, location } =
    data as any;
  const episodeNumber = episode?.length;

  return (
    <>
      <div className="row">
        <div className="col-6 image-detail">
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </div>
        <div className="col-6 details">
          <p>
            <b>Especie: </b>
            {species}
          </p>
          <p>
            <b>Estado: </b>
            {status}
          </p>
          <p>
            <b>Género: </b>
            {gender}
          </p>
          <p>
            <b>Lugar: </b>
            {location?.name}
          </p>
          <p>
            <b>Nº de episodios: </b>
            {episodeNumber}
          </p>
          <button onClick={handleFavorite} className="btn btn-warning">
            Añadir a favoritos
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center m-5">
          <button onClick={handleGoBack} className="btn btn-danger">
            Volver
          </button>
        </div>
      </div>
    </>
  );
};
