import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from 'styled-jsx/css';
import ThemeContext from '../providers/ThemeProvider';
import PropTypes from 'prop-types';

const Icon = ({ faIcon }) => {
  const theme = useContext(ThemeContext);
  const { className, styles } = css.resolve`
    svg {
      height: 21px;
      color: ${theme.colors.primary};
    }
    @media (min-width: ${theme.breakpoints.smUp}) {
      svg {
        height: 17px;
        color: ${theme.colors.primary};
      }
    }
  `;
  return (
    <>
      <FontAwesomeIcon icon={faIcon} className={className} />
      {styles}
    </>
  );
};

export default Icon;

Icon.propTypes = {
  faIcon: PropTypes.object.isRequired,
};
