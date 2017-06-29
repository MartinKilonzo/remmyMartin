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
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Avatar from 'material-ui/Avatar';

import Navigation from './Navigation';
import s from './Header.css';
import profileImage from './profileImage1.png';

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

  handleMouseEnter = () => this.setState({ showNav: true, avatarSize: 120 })

  handleMouseLeave = () => this.setState({ showNav: false, avatarSize: 72 })

  render() {
    const styles = {
      headerBar: {
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        background: 'inherit',
      },
      wrapper: {
        position: 'absolute',
        zIndex: 99,
        top: '56px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'inherit',
      },
      avatar: {
        zIndex: 100,
        marginTop: `${this.state.showNav ? 56 : 12}px`,
      },
    };

    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div style={styles.headerBar} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Avatar src={profileImage} size={this.state.avatarSize} style={styles.avatar} />
            {this.state.showNav &&
              <div className={`mdl-layout__header-row ${s.row}`} style={styles.wrapper}>
                <div className="mdl-layout-spacer"></div>
                <Navigation />
              </div>}
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  showNav: false,
  avatarSize: 72,
};

export default Header;
