import React from 'react';
import sanitizeHtml from 'sanitize-html-react';
import parseHtml from 'html-react-parser';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import specialMarkService from 'services/specialMarkService';

export default function CommentsPanelComponent({ comments }) {
  return (
    <ListGroup>
      {comments &&
        comments
          .sort((a, b) => b.date - a.date)
          .map(comment => {
            const processedComment = specialMarkService.changeSpecialMarksOnHtml(comment.content);
            const sanitizedComment = sanitizeHtml(processedComment, {
              allowedTags: ['span'],
              allowedAttributes: {
                span: ['style', 'data-*'],
              },
            });
            const parsedComment = parseHtml(sanitizedComment);
            return (
              <ListGroupItem key={comment.id}>
                <ListGroupItemHeading>{parsedComment}</ListGroupItemHeading>
                <ListGroupItemText>{comment.date.toLocaleString()}</ListGroupItemText>
              </ListGroupItem>
            );
          })}
    </ListGroup>
  );
}
