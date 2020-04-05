import * as React from 'react';
import { connect } from 'react-redux';

import HomePageComponent from 'pages/homePage/HomePageComponent';

export class HomePageContainer extends React.Component {
  render() {
    return <HomePageComponent />;
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
