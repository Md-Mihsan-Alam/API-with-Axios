import axios from 'axios';
import React from 'react';

const Api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    // baseURL : "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api",


});
// baseURL : 'https://dummyapi.online/';


const GetData = () => {
    return Api.get("/posts");
    // return Api.get("/movies");

    // return movie.get('/api/movies');
}

export const DeleteData = (id) =>{
    return Api.delete(`/posts/${id}`);
}

export default GetData;