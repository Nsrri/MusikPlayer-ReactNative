
import { URLParams } from "./URLParams"
export const BaseUrl = "https://spotify23.p.rapidapi.com/search/"


export function URLProvider(urlParams: URLParams):  string {
    const queryString = `?rapidapi-key=${urlParams.rapidapiKey}&q=${urlParams.q}&type=${urlParams.type}&offset=${urlParams.offset}&limit=${urlParams.limit}&numberofrequests=${urlParams.numberOfTopRequests}` 
    const url = `${BaseUrl}${queryString}`
    return url  
}