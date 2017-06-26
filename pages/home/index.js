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

import Layout from '../../components/Layout';
import Projects from './Projects.jsx';

import s from './styles.css';
import { title } from './index.md';

const NUM_PROJECTS = 2;

class HomePage extends React.Component {

  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    const styles = {
      title: {
        marginTop: '10%',
        marginBottom: '6px',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: 96,
      },
      subtitle: {
        marginTop: '6px',
        fontFamily: 'Roboto',
        fontWeight: 300,
      },
    };

    return (
      <Layout className={s.content}>
        <h1 style={styles.title}>Welcome</h1>
        <h3 style={styles.subtitle}>Check out some of my projects below:</h3>
        <Projects projects={this.props.projects} />
      </Layout>
    );
  }

}

const getProjects = () => {
  const projects = [];

  for (let i = 1; i <= NUM_PROJECTS; i ++) {
    const project = require(`./Projects/project${i}.md`);
    projects.push(project);
  }

  return projects;
};

HomePage.defaultProps = {
  projects: getProjects(),
};

export default HomePage;
