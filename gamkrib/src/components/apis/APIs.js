import axios from "axios"

const URL = 'https://dev-gamkrib.onrender.com/api/v1/'


export const base = axios.create({
    baseURL: URL,
    headers: {
        Accept: 'application/json',
        'X-CSRFToken': "UdyHUorwRirpQv36bPC3SC78ScSfuneHJqhVB90YOF7Q2D0QPl0GsGo1o98ojCLm"
    }
})

const tryApi = async () => {

    try {
        const resp = await axios(`${base}/listings`)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }

}
tryApi()