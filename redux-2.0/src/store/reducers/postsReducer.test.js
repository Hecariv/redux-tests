import reducer from "./postsReducer";
import * as actionTypes from "../actions/actionTypes"
import deepFreeze from "deep-freeze"

describe("post reducer", () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            posts: []
        })
    });

    it('should store a new post', () => {
        const currentState = {
            posts: [{
                id: 1,
                title: "test title",
                content: "test content",
                author: "test author",
                img_url: "img",
                createdAt: "2021-04-01T09:35:58.714Z",
                votes: 0
            }]
        }
        deepFreeze(currentState)
        const newPost = {
            id: 1,
            title: "test title",
            content: "test content",
            author: "test author",
            img_url: "img",
            createdAt: "2021-04-01T09:35:58.714Z",
            votes: 1
        }
        const newState = {
            posts: []
        }
        expect(
            reducer(newState, {
                type: actionTypes.ADD_NEW_POST,
                payload: newPost
            })
        ).toEqual(({
            posts: [
                {
                    id: 1,
                    title: "test title",
                    content: "test content",
                    author: "test author",
                    img_url: "img",
                    createdAt: "2021-04-01T09:35:58.714Z",
                    votes: 1
                }
            ]

        }))
    });
})