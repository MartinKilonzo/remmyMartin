import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import Link from '../../../components/Link/Link.js';
import history from '../../../core/history.js';
import Skill from './Skill.jsx';
import GithubLink from './GithubLink.jsx';

class ProjectComponent extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const projectPath = `${this.props.rootPath}/project/${this.props.github}`;
    this.state = {
      open: projectPath === history.getCurrentLocation().pathname,
      projectPath,
    };
  }

  handleMouseEnter = (event) => {
    let element = event.target;
    // Move up the tree to find the element with the box-shadow property
    while (element.style.boxShadow.length === 0) {
      element = element.parentElement;
    }
    // Modify the box-shadow property
    element.style.boxShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 18px, rgba(0, 0, 0, 0.12) 0px 1px 12px';
  }
  handleMouseLeave = (event) => {
    let element = event.target;
    // Move up the tree to find the element with the box-shadow property
    while (element.style.boxShadow.length === 0) {
      element = element.parentElement;
    }
    // Modify the box-shadow property
    element.style.boxShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px';
  }

  handleTouchTap = () => {
    setTimeout(() => this.isOpen(), 350);
  }

  isOpen = () => {
    const { pathname } = history.getCurrentLocation();
    this.setState({ open: this.state.projectPath === pathname });
  }

  handleClose = () => {
    history.push(`${this.props.rootPath}/project/`);
    this.isOpen();
  }

  render() {
    const image = new Image();
    image.src = this.props.preview;
    const styles = {
      wrapper: {
        margin: '18px 0',
      },
      buttonStyle: {
        height: '100%',
        color: 'black',
      },
      buttonWrapper: {
        height: '100%',
        padding: '24px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        background: 'white',
        backgroundColor: 'white',
        textAlign: 'left',
      },
      previewWrapper: {
        width: '42%',
        paddingRight: '4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      preview: {
        maxHeight: '240px',
        maxWidth: '100%',
      },
      descriptionWrapper: {
        minHeight: '236px',
        width: '50%',
        paddingLeft: '4%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      innerDescriptionWrapper: {
        width: '100%',
        display: 'flex',
        alignSelf: 'flex-end',
        flexGrow: '1',
      },
      skillWrapper: {
        width: '100%',
        marginLeft: '-4px',
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      githubLinkWrapper: {
        alignSelf: 'flex-end',
      },
    };

    const skills = this.props.skills.split(',').map((skill) => {
      let cleanedSkill = skill;
      if (skill[0] === ' ') {
        cleanedSkill = cleanedSkill.slice(1);
      }
      if (cleanedSkill[-1] === ' ') {
        cleanedSkill = cleanedSkill.slice(0, -1);
      }
      return cleanedSkill;
    });

    const link = <Link to={this.state.projectPath} />;

    return (
      <div style={{ width: '100%' }}>
        <RaisedButton style={styles.wrapper} buttonStyle={styles.buttonStyle} overlayStyle={styles.buttonWrapper} containerElement={link} onTouchTap={this.handleTouchTap} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} fullWidth>
          <div style={styles.previewWrapper}>
            <img src={this.props.preview} alt={`${this.props.title} Preview`} style={styles.preview} />
          </div>
          <div style={styles.descriptionWrapper}>
            <h5 style={styles.title}>{this.props.title}</h5>
            <p>{this.props.description}</p>
            <div style={styles.innerDescriptionWrapper}>
              <div style={styles.skillWrapper}>
                {skills.sort().map((skill, key) => <Skill key={key} skill={skill} />)}
              </div>
              <div style={styles.githubLinkWrapper}>
                <GithubLink link={this.props.github} />
              </div>
            </div>
          </div>
        </RaisedButton>
        <Dialog title={this.props.title} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent>
          <div className="project-dialog" dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </Dialog>
      </div>
    );
  }
}

ProjectComponent.defaultProps = {
  open: false,
  rootPath: '',
};

export default ProjectComponent;
