import * as actionTypes from "./actionTypes"

export const fetchCommentsSuccess = (comments) => {
    return {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: comments
    }
}

export const fetchComments = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8082/api/comments")
        const json = await response.json()
        dispatch(fetchCommentsSuccess(json))
    }
}

export const addNewComment = (payload) => {
    return async (dispatch) => {
        const respone = await fetch("http://localhost:8082/api/comments", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        dispatch(addNewCommentSuccess(payload))
    }
}

export const addNewCommentSuccess = (comment) => {
    return {
        type: actionTypes.ADD_NEW_COMMENT,
        payload: comment,
    }
}




