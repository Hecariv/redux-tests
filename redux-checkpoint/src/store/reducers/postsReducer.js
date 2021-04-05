const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST":
            console.log("hi")
            break;
        default:
            return state
    }
}

export default postsReducer