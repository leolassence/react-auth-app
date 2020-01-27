import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { signUpUser } from '../actions';
import {
  required,
  minValue,
  composeValidators,
  isEmail,
  validatePassword,
} from '../helpers/formvalidation';


class SignUp extends Component {
  handleSubmit = ({ email, password }) => this.props.signUpUser({
    email,
    password
  }, this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form
          onSubmit={this.handleSubmit}
          validate={validatePassword}
          render={({
            handleSubmit,
            form,
            pristine,
          }) => (
            <form className="form-signin" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
              <Field name="email" validate={composeValidators(required, isEmail)}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="email"
                      component="input"
                      placeholder="Email"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password" validate={composeValidators(required, minValue(8))}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="password"
                      component="input"
                      placeholder="Password"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="repeatPassword" validate={composeValidators(required, minValue(8))}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="password"
                      component="input"
                      placeholder="Repeat Password"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={pristine}>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signUpUser
  }, dispatch)
});

SignUp.propTypes = {
  history: PropTypes.shape({}),
  signUpUser: PropTypes.func.isRequired
};

SignUp.defaultProps = {
  history: {}
};

export default connect(null, mapDispatchToProps)(SignUp);
