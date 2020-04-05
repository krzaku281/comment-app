import * as React from 'react';
import PropTypes from 'prop-types';

import Comment from 'models/comment';
import SpecialMarkService from 'services/specialMarkService';

import AddCommentPanelComponent from 'pages/commentPage/addCommentPanel/AddCommentPanelComponent';

export class AddCommentPanelContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.contentEditable = React.createRef();
    this.state = {
      inputText: '',
      isShowUsers: false,
      searchText: '',
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value.replace('@', ''),
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 50 && event.shiftKey) {
      this.setState({
        isShowUsers: true,
      });
    }
  };

  handleUserChoosed = id => {
    const user = this.props.users.find(u => u.id === id);
    const mark = SpecialMarkService.createSpecialMark(user.name, 'userid', user.id);
    this.setState({
      inputText: this.state.inputText + mark,
      isShowUsers: false,
      searchText: '',
    });
  };

  handleSubmit = event => {
    this.props.addComment(new Comment({ content: this.state.inputText, date: new Date() }));
    this.setState({
      inputText: '',
    });
  };

  render() {
    return (
      <AddCommentPanelComponent
        users={this.props.users}
        inputText={this.state.inputText}
        contentEditable={this.contentEditable}
        isShowUsers={this.state.isShowUsers}
        searchText={this.state.searchText}
        handleChange={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
        handleKeyDown={e => this.handleKeyDown(e)}
        handleUserChoosed={e => this.handleUserChoosed(e)}
        handleSearchChange={e => this.handleSearchChange(e)}
      />
    );
  }
}

AddCommentPanelContainer.propTypes = {
  users: PropTypes.array,
  inputText: PropTypes.string,
  contentEditable: PropTypes.object,
  isShowUsers: PropTypes.bool,
  searchText: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleUserChoosed: PropTypes.func,
  handleSearchChange: PropTypes.func,
};

export default AddCommentPanelContainer;
