import { useQuery } from "@apollo/client";
import { GET_CHARACTERS, GET_CHARACTER } from "@/graphql/queries";
import { HpCharacter } from "@/types/character";

interface UseCharactersResult {
  characters: HpCharacter[];
  loading: boolean;
  error: string | undefined;
}

interface UseCharacterResult {
  character: HpCharacter | null;
  loading: boolean;
  error: string | undefined;
}

export function useCharacters(): UseCharactersResult {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  return {
    characters: data?.characters ?? [],
    loading,
    error: error?.message,
  };
}

export function useCharacter(id: string): UseCharacterResult {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return {
    character: data?.character ?? null,
    loading,
    error: error?.message,
  };
}
