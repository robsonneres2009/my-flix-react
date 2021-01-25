import React from 'react';
import Axios from 'axios';

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        Axios.get('http://api.tvmaze.com/schedule')
        .then(response => {
            if(response.status == '200'){
                resolve(response.data)
            }else{
                reject(false)
            }
        })
        .catch(err => {
            reject(false)
        })
    })
}

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        Axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then(response => {
            if(response.status == '200'){
                resolve(response.data)
            }else{
                reject(false)
            }
        })
        .catch(err => {
            reject(false)
        })
    })
}

export const getMovieByString = (string) => {
    return new Promise((resolve, reject) => {
        Axios.get(`http://api.tvmaze.com/search/shows?q=${string}`)
        .then(response => {
            if(response.status == '200'){
                resolve(response.data)
            }else{
                reject(false)
            }
        })
        .catch(err => {
            reject(false)
        })
    })
}