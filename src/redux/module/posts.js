
import { act } from 'react-dom/test-utils';
import { GET_POSTS, DELETE_POST, ADD_POST, UPDATE_POST } from './types';

const defaultState = {
    posts: [],
}

const postsReducer = (state = defaultState, action) => {
    console.log(state, action)
    switch (action.type){
        case GET_POSTS:
            const newPosts = action.payload.map(post => {
                return {
                    title: post.title,
                    id: post.id,
                    body: post.body,
                }
            })
            return {...state, posts: newPosts}; 
        case DELETE_POST:
            return {
                ...state, 
                posts: state.posts.filter(item => item.id !== action.payload.id)}
        case ADD_POST: 
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case UPDATE_POST: 
        console.log(action.payload)
            const itemIndex = state.posts.findIndex(res => res.id === action.payload.id);
            const newtPosts = [
                ...state.posts.slice(0, itemIndex),
                action.payload, 
                ...state.posts.slice(itemIndex + 1)
            ];
            return {
                ...state,
                posts: newtPosts
                }

        default:
            return state;
    }

};
export default postsReducer;