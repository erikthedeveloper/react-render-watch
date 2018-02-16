import React from 'react';
import PropTypes from 'prop-types';

export class Watch extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.test(this.props.value, prevProps.value)) {
      this.props.action(this.props.value, prevProps.value);
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
