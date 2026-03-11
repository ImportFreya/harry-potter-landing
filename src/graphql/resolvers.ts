import { fetchAllCharacters } from "@/lib/hp-api";
import { HpCharacter } from "@/types/character";

export const resolvers = {
  Query: {
    characters: async (): Promise<HpCharacter[]> => {
      return fetchAllCharacters();
    },

    character: async (
      _: unknown,
      { id }: { id: string }
    ): Promise<HpCharacter | undefined> => {
      const characters = await fetchAllCharacters();
      return characters.find((c) => c.id === id);
    },
  },
};
