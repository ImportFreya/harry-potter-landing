"use client";

import { useCharacters } from "@/hooks/useCharacters";

export default function Home() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <ul>
      {characters.map((char) => (
        <li key={char.id}>{char.name}</li>
      ))}
    </ul>
  );
}
