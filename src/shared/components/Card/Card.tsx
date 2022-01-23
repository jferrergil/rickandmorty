import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ character }: any) => {
  const { name, image, id } = character;

  return (
    <Link className="card m-3 border-0" to={`/character/${id}`}>
      <img src={image} className="card-img-top" alt={name} />
      <p className="card-title">{name}</p>
    </Link>
  );
};
