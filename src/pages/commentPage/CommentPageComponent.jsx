import React from 'react';

import AddCommentPanelContainer from 'pages/commentPage/addCommentPanel/AddCommentPanelContainer';
import CommentsPanelComponent from 'pages/commentPage/commentPanel/CommentsPanelComponent';

export default function CommentPageComponent({ users, comments, addComment }) {
  return (
    <>
      <AddCommentPanelContainer users={users} addComment={addComment} />
      <CommentsPanelComponent comments={comments} />
    </>
  );
}
