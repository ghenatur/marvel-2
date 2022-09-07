import axios from "axios";

const getCharacter = async (urlMarvel, character, apiKey) => {
    try {
        const data = await axios.get(`${urlMarvel}/${character}?${apiKey}`)
        return data.data.data
    } catch (error) {
        console.log(error)
    }
}
export default getCharacter
