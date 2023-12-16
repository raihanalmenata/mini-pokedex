import { getPokemonDetailFromIndex, getPokemonDetailFromUrl, getPokemonPaginationResource } from "../adapters/pokemon";

// Public Util
export const getNewCardData = async (limit: number, offset: number) => {
    const pokemonPaginationResources = await getPokemonPaginationResource(limit, offset);
      const pokemonDetailUrls = getUrlFromPaginationResource(pokemonPaginationResources);
      const pokemonDetails = await Promise.all(
        pokemonDetailUrls.map(async (url: string) => getPokemonDetailFromUrl(url))
      );
      const newCardData = getCardDataFromDetails(pokemonDetails);

      return newCardData
}

export const getInspectorDataFromIndex = async (index: string) => {
    const pokemonDetail = await getPokemonDetailFromIndex(index);
    const newInspectorData = getInspectorDataFromDetail(pokemonDetail);

    return newInspectorData;
}


// Private Util
const getUrlFromPaginationResource = (paginationResources: [{ url: string }]) => {
    return paginationResources.map(resource => resource.url)
}

const getCardDataFromDetails = (pokemonDetails: [{
    id: number,
    name: string,
    species: {name: string},
    types: [{type: {name: string}}],
    sprites: {front_default: string}
}]) => pokemonDetails.map(
    data => {
        const speciesName = data.species.name;
        const tyepesNames = data.types.map(type => type.type.name)
        const pictureURL = data.sprites.front_default

        return {
            index: data.id.toString(),
            name: data.name,
            species: speciesName,
            types: tyepesNames,
            pictureURL: pictureURL
        }
    }
)

export const getInspectorDataFromDetail = (pokemonDetail: {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    abilities: [{ability : {name : string}}],
    moves: [{move : {name : string}}],
    species: {name: string},
    types: [{type : {name : string}}],
    sprites: {front_default: string}
}) => {
        const abilities = pokemonDetail.abilities.map( data => data.ability.name );
        const moves = pokemonDetail.moves.map( data => data.move.name );
        // const species = pokemonDetail.species.name;
        const types = pokemonDetail.types.map( data => data.type.name );
        const picURL = pokemonDetail.sprites.front_default;

        return {
            picURL: picURL,
            name: pokemonDetail.name,
            types: types,
            index: pokemonDetail.id,
            baseExp: pokemonDetail.base_experience,
            height: pokemonDetail.height,
            weight: pokemonDetail.weight,
            abilities: abilities,
            moves: moves
        }
    }



