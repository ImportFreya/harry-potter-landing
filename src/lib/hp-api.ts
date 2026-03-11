import { HpCharacter } from "@/types/character";

const HP_API_URL = "https://hp-api.onrender.com/api/characters";


export async function fetchAllCharacters(): Promise<HpCharacter[]> {

  const response = await fetch(HP_API_URL, {
    next: { revalidate: 3600},
  });

  if (!response.ok) {
    throw new Error(`HP API error: ${response.status}`);
  }

  return response.json()
;}