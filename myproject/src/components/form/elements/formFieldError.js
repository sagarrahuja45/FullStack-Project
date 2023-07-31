import React from 'react';

import PropTypes from 'prop-types';

import { StyleError } from '../../createPost/createPost.styled';
const FormFieldError = ({ align, error, children, size, position }) => {
  return <StyleError align={align}>{error?.message}</StyleError>;
};

FormFieldError.defaultProps = {
  align: 'left',
  size: 'xsmall',
  position: 'relative',
  children: null,
};

FormFieldError.propTypes = {
  align: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
  error: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FormFieldError;
