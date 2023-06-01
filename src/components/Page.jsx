import { useState, useEffect } from "react";
import { CardPokemon } from "./CardPokemon";
export const Page = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    try {
      findPokemons();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const findPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    const arrayWithPokemons = data.results.map((element) => [
      element.name,
      element.url,
    ]);
    setPokemones(arrayWithPokemons);
  };
  return (
    <div className="page">
      {pokemones.map((pokemon, index) => (
        <div key={index} className="containerCardPokemon">
          <CardPokemon name={pokemon[0]} url={pokemon[1]} />
        </div>
      ))}
    </div>
  );
};
