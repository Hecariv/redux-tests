import React from "react"
import Comment from "./Comment";

const CommentList = (props) => (
    <ul className="mt-2">
        {props.comments.filter(comment => comment.post_id === props.postId).map(comment =>
            <Comment key={comment.id} content={comment.content}> </Comment>)}
    </ul>
)

export default CommentList