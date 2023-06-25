
import {SPOTIFY_BASE_URL,X_RAPIDAPI_KEY,X_RAPIDAPI_HOST } from '@env'
import axios from "axios";
import { SongInfo } from "./Data";

export const getAllTracks = async (query:string): Promise<SongInfo[] | undefined> =>  {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
      method: 'GET',
      params: {
        q: query
      },
      headers: {
        'X-RapidAPI-Key': `${X_RAPIDAPI_KEY}` ,
        'X-RapidAPI-Host': `${X_RAPIDAPI_HOST}`
      }
    })
    const responseObject = response.data;
    const SongInfo = responseObject.data;
    return SongInfo ;
  } catch (error) {
    console.log(error)

  }
}