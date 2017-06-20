import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class ProjectComponent extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = props;
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
        textAlign: 'left',
      },
      preview: {
        width: '36%',
        height: '100%',
        paddingRight: '4%',
      },
      description: {
        width: '56%',
        paddingLeft: '4%',
      },
    };

    return (
      <div>
        <RaisedButton style={styles.wrapper} buttonStyle={styles.buttonStyle} overlayStyle={styles.buttonWrapper} onTouchTap={this.handleTouchTap} fullWidth>
          <div style={styles.preview}>
            whoa
          </div>
          <div style={styles.description}>
            <h5>{this.props.title}</h5>
            <p>{this.props.description}</p>
          </div>
        </RaisedButton>
        <Dialog title={this.props.title} open={this.state.open} onRequestClose={() => this.setState({ open: false })} autoScrollBodyContent>
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
