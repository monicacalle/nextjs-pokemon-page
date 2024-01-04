import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { PokemonGrid } from "../../../pokemons/components/PokemonGrid";

export const metadata = {
  title: "favoritos",
  description: "favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col my-2">
      <span>
        pokemones favoritos <small>global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
