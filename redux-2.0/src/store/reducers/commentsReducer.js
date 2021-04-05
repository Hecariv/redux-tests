import * as actionTypes from "../actions/actionTypes"

const initialState =  {
    comments: [],
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.comments
            }

        case actionTypes.ADD_NEW_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.payload)
            }

        default:
            return state
    }
}

export default commentsReducer