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
import Projects from './Projects/Projects.jsx';

import s from './styles.css';
import { title } from './index.md';

const NUM_PROJECTS = 5;

class ProjectPage extends React.Component {

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
    const project = require(`./Projects/ProjectDocs/project${i}.md`);
    for (const field in project) {
      if (field !== 'html') {
        let data = project[field];
        console.log(data, field);
        if (data[0] === ' ') {
          data = data.slice(1);
        }
        if (data[-1] === ' ') {
          data = data.slice(0, -1);
        }
      }
    }
    projects.push(project);
  }

  return projects;
};

ProjectPage.defaultProps = {
  projects: getProjects(),
};

export default ProjectPage;
