import axios from "axios";

export const plainAPi = axios.create({
    baseURL: 'https://gamkribbackend.onrender.com',
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
    },
})

//interceptor

// set the token to localStorage and don't forget to clear 

const base = plainAPi
base.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('gamkribToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default base