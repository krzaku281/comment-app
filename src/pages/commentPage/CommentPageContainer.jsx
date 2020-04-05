import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchComments, addComment } from 'redux/comments/commentsActions';
import { fetchUsers } from 'redux/users/usersActions';

import CommentPageComponent from 'pages/commentPage/CommentPageComponent';

export class CommentPageContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchComments();
  }
  render() {
    return (
      <CommentPageComponent
        users={this.props.users}
        comments={this.props.comments}
        addComment={this.props.addComment}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    comments: state.commentsReducer.comments,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchUsers()),
  addComment: comment => dispatch(addComment(comment)),
});

CommentPageContainer.propTypes = {
  users: PropTypes.array,
  comments: PropTypes.array,
  fetchComments: PropTypes.func,
  fetchUsers: PropTypes.func,
  addComment: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPageContainer);
