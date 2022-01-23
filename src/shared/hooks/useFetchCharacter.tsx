import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetCharacterById } from "../services/getSingleCharacters";

export const UseFetchCharacter = (id: number) => {
  const { data } = useQuery(GetCharacterById, {
    variables: { id },
  });

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    setState({
      data: data?.character,
    });
  }, [data?.character]);
  return state;
};
