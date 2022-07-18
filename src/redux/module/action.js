
import { GET_POSTS, DELETE_POST, ADD_POST, UPDATE_POST } from './types';
import uniqid from 'uniqid';


export function getPosts(){
    return async (dispatch) => {
    try{
       const respons = await fetch('https://jsonplaceholder.typicode.com/posts/?limit=4')
        const jsonData = await respons.json();
        dispatch({type: GET_POSTS, payload: jsonData})
    }catch(error){
        console.log(error)
    }
}}


export function deletePost(id){
    return async (dispatch) => {
    try{
       const respons = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
       })

        dispatch({type: DELETE_POST, payload: {id}})
    }catch(error){
        console.log(error)
    }
}}

export function addPost(title, body){
    return async (dispatch) => {
    try{
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title,
              id: 115,
              body: body,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then((data) => dispatch({type: ADD_POST, payload: data}))
        
    }catch(error){
        console.log(error)
    }
}}


export function upDatePost(title, body, id){
    return async (dispatch) => {
    try{
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id,
              title,
              body,
              userId: uniqid(),
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then((data) => {return dispatch({type: UPDATE_POST, payload: data})})
            
        
    }catch(error){
        console.log(error)
    }
}}