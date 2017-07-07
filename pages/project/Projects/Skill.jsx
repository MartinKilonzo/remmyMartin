import React from 'react';
import PropTypes from 'prop-types';

import skillColors from './skillColors.json';

class Skill extends React.PureComponent {

  static propTypes = {
    skill: PropTypes.string.isRequired,
  }

  handleMouseEnter = (event) => {
    event.target.style.background = this.getColor(0.4);
  }

  handleMouseLeave = (event) => {
    event.target.style.background = this.getColor(0.25);
  }

  getColor = (alpha) => {
    let sc = skillColors[this.props.skill];
    if (typeof skillColors[this.props.skill] === 'undefined') {
      // console.warn(`Skill color not indexed: ${this.props.skill}`);
      sc = skillColors.other;
    }
    const color = sc.color;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgba(${r}, ${g}, ${b})`;
  }

  render() {
    const styles = {
      wrapper: {
        height: '20px',
        margin: '4px',
        padding: '2px 8px',
        border: `1px solid ${this.getColor(1)}`,
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: this.getColor(1),
        background: this.getColor(0.25),
        fontSize: '8pt',
        lineHeight: '8pt',
        fontWeight: '500',
      },
    };

    return (
      <div style={styles.wrapper} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.skill}
      </div>
    );
  }
}

Skill.defaultProps = {};

export default Skill;
