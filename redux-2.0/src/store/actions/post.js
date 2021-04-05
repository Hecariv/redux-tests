import * as actionTypes from "./actionTypes"

export const addNewPostSuccess = (postData) => {
    return {
        type: actionTypes.ADD_NEW_POST,
        payload: postData,
    }
};

export const addNewPost = (postData) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        console.log(response)
        dispatch(addNewPostSuccess(postData))
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/posts")
        const json = await response.json()
        dispatch(fetchPostsSuccess(json))
    }
}

export const updateIncrementVotes = (post) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8082/api/posts/votes/increase/${post.id}`)
        dispatch(incrementVotes(post.id))
    }
}

export const incrementVotes = (id) => {
    return {
        type: actionTypes.INCREMENT_VOTES,
        id: id
    }
}

export const updateDecreaseVotes = (post) => {
    return async (dispatch) => {
        if (post.votes <= 0) {
            return
        }
        const response = await fetch(`http://localhost:8082/api/posts/votes/decrease/${post.id}`)
        dispatch(decreaseVotes(post.id))
    }
}

export const decreaseVotes = (id) => {
    return {
        type: actionTypes.DECREASE_VOTES,
        id: id
    }
}

