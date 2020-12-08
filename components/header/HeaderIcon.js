import React, { useContext } from 'react';
import classNames from 'classnames';
import Badge from '../Badge';
import Icon from '../Icon';
import {
  faMapMarkerAlt,
  faPaperPlane,
  faUser,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../providers/ThemeProvider';
import PropTypes from 'prop-types';

const HeaderIcon = ({
  icon,
  isLoggedIn,
  isMobleHidden,
  badgeContent,
  clickMethod,
  isFirst,
}) => {
  const theme = useContext(ThemeContext);
  function handleClick() {
    if (clickMethod) {
      clickMethod();
    }
  }
  let faIcon = faMapMarkerAlt;
  let tooltip = '';
  let ariaLabel = '';
  let dataQa = '';
  let badge = null;

  if (icon === 'location') {
    faIcon = faMapMarkerAlt;
    tooltip = 'Location';
    ariaLabel = 'Change location';
    dataQa = 'changeLocation';
  }
  if (icon === 'subscribe') {
    faIcon = faPaperPlane;
    tooltip = 'Subscribe';
    ariaLabel = 'Subscribe to our Newsletter';
    dataQa = 'subscribe';
  }
  if (icon === 'login') {
    faIcon = faUser;
    tooltip = isLoggedIn ? 'Menu' : 'Login';
    ariaLabel = tooltip;
    dataQa = 'login';
  }
  if (icon === 'basket') {
    faIcon = faShoppingBasket;
    tooltip = 'Basket';
    ariaLabel = tooltip;
    dataQa = 'goToBasket';
    badge = null;
    if (!isNaN(badgeContent)) {
      badge = (
        <Badge
          badgeContent={badgeContent}
          badgeColor={theme.colors.basketcount}
          isAriaHidden={true}
        ></Badge>
      );
      ariaLabel = `${badgeContent} Item in Basket`;
    }
  }
  const componentClass = classNames({
    'header-icon': true,
    'header-icon--hidden-mobile': isMobleHidden,
    'header-icon--is-first': isFirst,
  });
  return (
    <div className={componentClass}>
      <a
        aria-label={ariaLabel}
        className="header-icon__link"
        data-qa={dataQa}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex="0"
      >
        <div className="header-icon__badge-wrapper">{badge}</div>
        <Icon faIcon={faIcon} />
        <span className="sr-only">{ariaLabel}</span>
      </a>
      <div className="header-icon__tooltip">
        <span className="header-icon__tooltip-text">{tooltip}</span>
      </div>
      <style jsx>{`
        .header-icon {
          font-family: ${theme.fonts.base};
          display: inline-block;
          overflow: visible;
          margin-left: 10px;
          position: relative;
          text-align: center;
        }
        .header-icon--is-first {
          margin-left: 0;
        }
        @media (min-width: ${theme.breakpoints.mdUp}) {
          @media (pointer: fine) {
            a:hover + .header-icon__tooltip {
              display: block;
            }
          }
        }
        @media (max-width: ${theme.breakpoints.mdDown}) {
          .header-icon--hidden-mobile {
            display: none;
          }
        }
        .header-icon__badge-wrapper {
          line-height: 0;
          position: absolute;
          right: -6px;
          top: -3px;
        }
        @media (min-width: ${theme.breakpoints.mdUp}) {
          .header-icon__badge-wrapper {
            right: -2px;
            top: -2px;
          }
        }
        .header-icon__tooltip {
          color: ${theme.colors.primary};
          display: none;
          font-size: 12px;
          left: 50%;
          position: absolute;
        }
        .header-icon__tooltip-text {
          left: -50%;
          position: relative;
        }
        .header-icon__link {
          display: block;
          border: none;
          height: 20px;
          width: 20px;
        }
        @media (min-width: ${theme.breakpoints.mdUp}) {
          .header-icon__link {
            border: solid;
            border-radius: 32px;
            border-color: ${theme.colors.primary};
            line-height: 27px;
            height: 32px;
            width: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  isMobleHidden: PropTypes.bool,
  badgeContent: PropTypes.string,
  clickMethod: PropTypes.func,
  isFirst: PropTypes.bool,
};
