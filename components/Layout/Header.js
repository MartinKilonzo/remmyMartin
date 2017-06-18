/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Avatar from 'material-ui/Avatar';
import s from './Header.css';

class Header extends React.Component {

  static propTypes = {
    showNav: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  handleMouseEnter = () => this.setState({ showNav: true })

  handleMouseLeave = () => this.setState({ showNav: false })

  render() {
    const styles = {
      headerBar: {
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
      },
      wrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      avatar: {
        marginTop: `${this.state.showNav ? 56 : 12}px`,
      },
    };
    const avatarSize = this.state.showNav ? 120 : 72;
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div style={styles.headerBar} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Avatar size={avatarSize} style={styles.avatar}>M</Avatar>
        </div>
        <ReactCSSTransitionGroup transitionName="header" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.showNav && <div>
            <div className={`mdl-layout__header-row ${s.row}`} style={styles.wrapper}>
              <div className="mdl-layout-spacer"></div>
              <Navigation />
            </div>
          </div>}
        </ReactCSSTransitionGroup>
      </header>
    );
  }
}

Header.defaultProps = {
  showNav: false,
};

export default Header;
