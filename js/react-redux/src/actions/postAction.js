import { FETCH_POST, NEW_POST } from './type';
export const fetchPosts = () => dispatch => {
    console.log("fetching... 123 Go ahead!");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POST,
                payload: posts
            })
        );
}

export const createPost = postData => dispatch => {
    console.log("123 go a head !")
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}