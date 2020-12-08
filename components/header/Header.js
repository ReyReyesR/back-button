import React, { useContext } from 'react';
import HeaderItemsLayout from './HeaderItemsLayout';
import HeaderNavLayout from './HeaderNavLayout';
import ThemeContext from '../../providers/ThemeProvider';

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <header>
      <div className="items">
        <HeaderItemsLayout />
      </div>
      <div className="nav">
        <HeaderNavLayout />
      </div>
      <style jsx>{`
        .items {
          background-color: ${theme.colors.backgroundheader};
        }
        .nav {
          background-color: ${theme.colors.backgroundheadernav};
          border-bottom: ${'1px solid' + theme.colors.navborder};
          border-top: ${'1px solid' + theme.colors.navborder};
          display: block;
          height: 36px;
        }
      `}</style>
    </header>
  );
};

export default Header;
