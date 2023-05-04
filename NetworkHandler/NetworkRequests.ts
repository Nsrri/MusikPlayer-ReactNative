import { Music } from "./Data";
import { URLParams } from "./URLParams";
import { URLProvider } from "./URLProvider";
import { useState, useEffect } from "react";

export default function NetworkRequests(): Promise<Music>{

   const getAllMusiks = async (): Promise<Music> =>  {
    const params: URLParams = {
        rapidapiKey: '79d76177e4msha1235329fcd44e8p12f3c6jsn42826c0c0110',
        q: '<REQUIRED>',
        type: 'multi',
        offset: 0,
        limit: 10,
        numberOfTopRequests: 10,
    
      }
      const url = URLProvider(params);
      const method: RequestInit = {method: 'GET'}
        const response = await fetch(url, method);
        const data = await response.json();
        return data
}
return getAllMusiks();
}