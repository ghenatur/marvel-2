import axios from "axios";

const getHeroes = async (urlMarvel, searchHero, apiKey) => {

    try {
        const data = await axios.get(`${urlMarvel}?nameStartsWith=${searchHero}&ts=1&${apiKey}`)
        return data.data.data
    } catch (error) {
        console.log(error)
    }
}

export default getHeroes;
