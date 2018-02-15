import React from 'react';
import PropTypes from 'prop-types';

export class Watch extends React.Component {
  componentDidUpdate(prevProps) {
    const {value, test, action} = this.props;
    if (test(prevProps.value, value)) {
      action(prevProps.value, value);
    }
  }

  render() {
    return null;
  }
}

Watch.propTypes = {
  value: PropTypes.any,
  test: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};
