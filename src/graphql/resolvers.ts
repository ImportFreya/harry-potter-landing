import { fetchAllCharacters } from "@/lib/hp-api"
import { HpCharacter } from "@/types/character"

export const resolvers = {
  Query: {
    characters: async (): Promise<HpCharacter[]> => {
      return fetchAllCharacters()
    },

    character: async (_: unknown, { id }: { id: string }) => {
      const characters = await fetchAllCharacters()
      return characters.find((c) => c.id === id)
    },

    houses: async () => {
      const characters = await fetchAllCharacters()
      const houseMap = new Map<string, HpCharacter[]>()

      characters.forEach((c) => {
        if (!c.house) return
        if (!houseMap.has(c.house)) houseMap.set(c.house, [])
        houseMap.get(c.house)!.push(c)
      })

      return Array.from(houseMap.entries()).map(([name, members]) => ({
        name,
        members,
        memberCount: members.length,
      }))
    },

    house: async (_: unknown, { name }: { name: string }) => {
      const characters = await fetchAllCharacters()
      const members = characters.filter(
        (c) => c.house?.toLowerCase() === name.toLowerCase()
      )
      return { name, members, memberCount: members.length }
    },
  },
}
