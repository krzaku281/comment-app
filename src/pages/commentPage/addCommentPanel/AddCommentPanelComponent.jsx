import React from 'react';
import sanitizeHtml from 'sanitize-html-react';
import ContentEditable from 'react-contenteditable';
import { Input, FormGroup, Label, Button, ListGroupItem, ListGroup } from 'reactstrap';

import specialMarkService from 'services/specialMarkService';

export default function AddCommentPanelComponent({
  contentEditable,
  users,
  inputText,
  isShowUsers,
  handleChange,
  handleSubmit,
  handleKeyDown,
  handleUserChoosed,
  searchText,
  handleSearchChange,
}) {
  const processedComment = specialMarkService.changeSpecialMarksOnHtml(inputText);
  const sanitizedComment = sanitizeHtml(processedComment, {
    allowedTags: ['span'],
    allowedAttributes: {
      span: ['style', 'data-*'],
    },
  });

  return (
    <FormGroup>
      <Label>New comment</Label>
      <ContentEditable
        innerRef={contentEditable}
        html={sanitizedComment}
        disabled={false}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ border: '1px solid #aaa', marginBottom: '10px' }}
      ></ContentEditable>
      {isShowUsers && users && (
        <ListGroup style={{ position: 'absolute', zIndex: '100', height: '200px', overflow: 'auto' }}>
          <Input placeholder="search" text={searchText} onChange={handleSearchChange} />
          {users
            .filter(u => u.name.toLowerCase().indexOf(searchText) > -1)
            .map(user => (
              <ListGroupItem key={user.id} onClick={e => handleUserChoosed(user.id)}>
                {user.name}
              </ListGroupItem>
            ))}
        </ListGroup>
      )}
      <Button disabled={sanitizedComment.length < 0} onClick={handleSubmit}>
        Add comment
      </Button>
    </FormGroup>
  );
}
