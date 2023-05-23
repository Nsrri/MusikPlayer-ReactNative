import { Albums, Music } from "./Data";
import { URLParams } from "./URLParams";
import { BaseUrl } from "./URLProvider";
import { useState, useEffect } from "react";
import axios from "axios";

// export const getAlbums = async () => {
//   try {
//     const response = await axios.get(`${BaseUrl}`, {
//       method: 'GET',
//       params: {
//         ids: '3IBcauSj5M2A6lTeffJzdv'
//       },
//       headers: {
//         'X-RapidAPI-Key': '79d76177e4msha1235329fcd44e8p12f3c6jsn42826c0c0110',
//         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//       }
//     })
//     console.log(response);
//   } catch (error) {
//     console.log(error)

//   }
  // const params: URLParams = {
  //   rapidapiKey: '79d76177e4msha1235329fcd44e8p12f3c6jsn42826c0c0110',
  //   q: '<REQUIRED>',
  //   type: 'multi',
  //   offset: 0,
  //   limit: 10,
  //   numberOfTopRequests: 10,

  // }
  // const url = URLProvider(params);
  // const method: RequestInit = { method: 'GET' }
  // const response = await fetch(url, method);
  // const data = await response.json();
  // return data
// }