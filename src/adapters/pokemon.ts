const sourceBaseUrl = 'https://pokeapi.co/api/v2';

    export const getPokemonPaginationResource = async (limit: number, offset: number) => {
        const endpoint = '/pokemon';
        const query = '?' + new URLSearchParams({'limit' : limit.toString(), 'offset': offset.toString()}).toString();
        const reqUrl = sourceBaseUrl + endpoint + query;

        const reqData = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
        }

        const response =  await fetch(reqUrl, reqData);
        const json = await response.json();


        return json['results'];
    }

    export const getPokemonDetail = async (index: string) => {
        const endpoint = '/pokemon/' + index;
        const reqUrl = sourceBaseUrl + endpoint

        const reqData = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
        }

        const response =  await fetch(reqUrl, reqData)
        const json = await response.json()

        return json;
    }