import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.challonge.com/v1/',
    timeout: 10000,
    auth: {
        username: 'jessireedev',
        password: 'ZuGxsJsik0cVXmsICofJdBKMJLWBAjHcvdBHFwj8'
    }
})