import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이동기1",
        comment: "댓글 1"
    },
    {
        name: "이동기2",
        comment: "댓글 2"
    },
    {
        name: "이동기3",
        comment: "댓글 3"
    },
    {
        name: "이동기4",
        comment: "댓글 4"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;