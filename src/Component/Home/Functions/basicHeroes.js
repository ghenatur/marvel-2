import axios from "axios";

const basicHeroes = async (urlMarvel, apiKey,limit) => {

    try {
        const data = await axios.get(`${urlMarvel}${apiKey}`,
            {
                params: {
                    limit:limit,
                }
            })
        return data.data.data
    } catch (error) {
        console.log(error)
    }
}

export default basicHeroes;
