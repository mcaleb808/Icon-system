import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader } from 'react-svgmt';

const defaultStyles = { marginLeft: 30 };

const Icon = ({ color, icon, className, style, size }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <SvgLoader
      width={size}
      height={size}
      path={icon}
      fill={color}
      className={className}
      style={styles}
    />
  );
};

Icon.defaultProps = {
  color: '#000000',
  size: 25,
  width: 25,
  style: {},
  className: '',
};

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
