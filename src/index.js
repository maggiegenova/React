import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./comment-detail-component";
import ApprovalCard from "./approval-card-component";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.image()}
          comment="Nice blog post"
          date="Today at 6:00PM"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          avatar={faker.image.image()}
          comment="Nice job!"
          date="Yesterday at 1:00PM"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avatar={faker.image.image()}
          comment="Good work :)"
          date="Tuesday at 6:00PM"
        />
      </ApprovalCard>

      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
