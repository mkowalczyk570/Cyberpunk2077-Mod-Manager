const API_HEADER = {apikey: "T4YdKePp79IO67FFDeGL9zRHmAH8xY5ojFbQM+rvLKVLEq7mToDk--3Nm0XBVLUVzKHyjo--lFSVHtiM+5nzWrjWuWxx+w=="}
const API_URI = "https://api.nexusmods.com/v1/games/cyberpunk2077/mods/"

export const getModInfo = async (modID) => {
    const URL = API_URI + modID 
    let res = await fetch(
        URL,
        {headers: API_HEADER},
        {method: "GET"}
    )
    return res
}

