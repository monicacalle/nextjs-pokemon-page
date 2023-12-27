const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(
    `http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json);

  return data;
};

export default function PokemonsPage() {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
