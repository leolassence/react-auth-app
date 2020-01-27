import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { parseError, resetError } from '../actions';

class Errors extends Component {
  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.resetError();
    }
  }

  render() {
    return (
      this.props.error && (
        <div className="alert alert-danger" role="alert">
          {this.props.error}
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  error: state.errors.message
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    parseError,
    resetError
  }, dispatch)
});

Errors.defaultProps = {
  location: {
    pathname: '/'
  },
  error: ''
};

Errors.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  resetError: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Errors));
