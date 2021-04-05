import * as actionTypes from "../actions/actionTypes"

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_POST:
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case actionTypes.INCREMENT_VOTES:
            return {
                posts: state.posts.map(post => (post.id === action.id ? {
                    ...post,
                    votes: Number(post.votes + 1)
                    } : post))
            }
        case actionTypes.DECREASE_VOTES:

            return {
                posts: state.posts.map(post => (post.id === action.id ? {
                    ...post,
                    votes: Number(post.votes - 1)
                } : post))
            }

        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
}

export default postsReducer