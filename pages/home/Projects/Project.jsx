import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import Skill from './Skill.jsx';

class ProjectComponent extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = props;
  }

  handleMouseEnter = (event) => {
    event.target.style.opacity = 0.65;
  }
  handleMouseLeave = (event) => {
    event.target.style.opacity = 1;
  }

  handleTouchTap = () => {
    setTimeout(() => this.setState({ open: true }), 350);
  }

  render() {
    const styles = {
      wrapper: {
        margin: '18px 0',
      },
      buttonStyle: {
        height: '100%',
      },
      buttonWrapper: {
        height: '100%',
        padding: '24px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        background: 'white',
        backgroundColor: 'white',
        textAlign: 'left',
      },
      preview: {
        width: '42%',
        height: '100%',
        paddingRight: '4%',
      },
      description: {
        width: '50%',
        paddingLeft: '4%',
      },
      skillWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
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

    return (
      <div>
        <RaisedButton style={styles.wrapper} buttonStyle={styles.buttonStyle} overlayStyle={styles.buttonWrapper} onTouchTap={this.handleTouchTap} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} fullWidth>
          <img src={this.props.preview} alt={`${this.props.title} Preview`} style={styles.preview} />
          <div style={styles.description}>
            <h5>{this.props.title}</h5>
            <p>{this.props.description}</p>
            <div style={styles.skillWrapper}>
              {skills.map((skill, key) => <Skill key={key} skill={skill} />)}
            </div>
          </div>
        </RaisedButton>
        <Dialog bodyClassName="project-dialog" title={this.props.title} open={this.state.open} onRequestClose={() => this.setState({ open: false })} autoScrollBodyContent>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </Dialog>
      </div>
    );
  }
}

ProjectComponent.defaultProps = {
  open: false,
};

export default ProjectComponent;
