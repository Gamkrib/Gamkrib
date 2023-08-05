import axios from "axios"

const URL = 'https://dev-gamkrib.onrender.com/api/v1/'




const apiUrl = 'https://dev-gamkrib.onrender.com/api/v1/';
const csrfToken = 'UdyHUorwRirpQv36bPC3SC78ScSfuneHJqhVB90YOF7Q2D0QPl0GsGo1o98ojCLm';



export const base = async (route) => {
    try {
        const resp = await axios(`${apiUrl}${route}/`,
            {
                headers: {
                    'accept': 'application/json',
                    'X-CSRFToken': csrfToken,
                }
            })
        return console.log(resp)
    } catch (error) {
        return console.log(error)
    }

}