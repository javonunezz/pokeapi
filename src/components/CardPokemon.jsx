import { useState } from "react";
import { useEffect } from "react";

export const CardPokemon = ({ name = "pikachu", url }) => {
  useEffect(() => {
    getInfoPokemon();
  }, []);

  const [infoPokemon, setInfoPokemon] = useState([]);

  const getInfoPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setInfoPokemon(data);
  };
  const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="cardPokemon">
      <img
        className="imagePokemon"
        src={
          infoPokemon.sprites?.other?.dream_world?.front_default ??
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
        alt="Foto de Bulbasur"
      />
      <h1>{nameUpperCase}</h1>
    </div>
  );
};
