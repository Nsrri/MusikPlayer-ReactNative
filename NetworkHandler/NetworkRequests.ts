
import { useState, useEffect } from "react";
import {SPOTIFY_BASE_URL,X_RAPIDAPI_KEY,X_RAPIDAPI_HOST } from '@env'
import axios from "axios";

export const getAllTracks = async (query:string) => {
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
    const dataEntity = responseObject.data;
    const firstElement = dataEntity[0]

   console.log(firstElement.title)
    return firstElement ;
  } catch (error) {
    console.log(error)

  }
}