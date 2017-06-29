import React from 'react';

import history from '../../core/history.js';

class HomePage extends React.PureComponent {

  render() {
    history.push('/project/');

    return (
      null
    );
  }
}

HomePage.defaultProps = {};

export default HomePage;
