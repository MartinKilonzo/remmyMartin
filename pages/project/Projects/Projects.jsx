import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project.jsx';

class Projects extends React.PureComponent {

  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  render() {
    const styles = {
      wrapper: {
        maxWidth: '90%',
        margin: '36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };

    return (
      <div style={styles.wrapper}>
        {this.props.projects.map((project, key) => <Project key={key} {...project} />)}
      </div>
    );
  }
}

Projects.defaultProps = {};

export default Projects;
