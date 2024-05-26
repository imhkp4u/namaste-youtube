import React from "react";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Hemant Prasad",
    text: "My name is Hemant Prasad",
    replies: [
      {
        name: "Hemant Prasad",
        text: "My name is Hemant Prasad",
        replies: [],
      },
      {
        name: "Hemant Prasad",
        text: "My name is Hemant Prasad",
        replies: [],
      },
      {
        name: "Hemant Prasad",
        text: "My name is Hemant Prasad",
        replies: [
          {
            name: "Hemant Prasad",
            text: "My name is Hemant Prasad",
            replies: [
              {
                name: "Hemant Prasad",
                text: "My name is Hemant Prasad",
                replies: [
                  {
                    name: "Hemant Prasad",
                    text: "My name is Hemant Prasad",
                    replies: [],
                  },
                ],
              },
              {
                name: "Hemant Prasad",
                text: "My name is Hemant Prasad",
                replies: [],
              },
            ],
          },
          {
            name: "Hemant Prasad",
            text: "My name is Hemant Prasad",
            replies: [],
          },
          {
            name: "Hemant Prasad",
            text: "My name is Hemant Prasad",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Hemant Prasad",
    text: "My name is Hemant Prasad",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
