import {AxiosPromise, AxiosResponse} from 'axios';
import { searchUrl, key } from '../config';



const axios = require('axios').default;

export class Search{
    public result;
    constructor(public query: string){}

    async searchQuery(){
        try{
            const response: AxiosResponse = await axios.get(`${searchUrl}recipes/search?query=${this.query}&apiKey=${key}`)
            this.result = response.data;
        } catch(err){
            throw new Error(err)
        }
    }
}