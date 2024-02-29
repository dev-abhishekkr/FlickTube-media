import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "firstofMirage",
    text: "lorem ipsum dgsfass",
    replies: [],
  },
  {
    name: "firstofMirage",
    text: "lorem ipsum dgsfass",
    replies: [
      {
        name: "firstofMirage",
        text: "lorem ipsum dgsfass",
        replies: [
          {
            name: "firstofMirage",
            text: "lorem ipsum dgsfass",
            replies: [
              {
                name: "firstofMirage",
                text: "lorem ipsum dgsfass",
                replies: [
                  {
                    name: "firstofMirage",
                    text: "lorem ipsum dgsfass",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "firstofMirage",
    text: "lorem ipsum dgsfass",
    replies: [
      {
        name: "firstofMirage",
        text: "lorem ipsum dgsfass",
        replies: [
          {
            name: "firstofMirage",
            text: "lorem ipsum dgsfass",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "firstofMirage",
    text: "lorem ipsum dgsfass",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-gray-400 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsConatiner = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsConatiner;
