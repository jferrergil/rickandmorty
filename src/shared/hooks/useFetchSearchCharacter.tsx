import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetSearchCharacters } from "../services/getSearchCharacters";

export const useFetchSearchCharacter = (characterName: string, page: any) => {
  const [state, setState] = useState({
    characters: [],
  });

  const { data } = useQuery(GetSearchCharacters, {
    variables: {
      charactersFilter: {
        name: characterName,
      },
      page: page,
    },
  });

  useEffect(() => {
    if (data) {
      const { characters } = data;
      const { results } = characters;
      setState({ characters: results });
    }
  }, [data]);

  return state;
};
