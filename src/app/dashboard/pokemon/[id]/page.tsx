import { Pokemon } from "@/pokemons";
import { promises } from "dns";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    descripcion: `Pagina del pokemon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    // cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 30 * 6,
    },
  }).then((resp) => resp.json());

  console.log(" se cargo:", pokemon.name);
  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1> Pokemon {params.id}</h1>
      <div>{pokemon.name}</div>
    </div>
  );
}
