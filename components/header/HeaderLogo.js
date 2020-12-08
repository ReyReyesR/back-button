import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeProvider';

const HeaderLogo = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="logo"></div>
      <style jsx>{`
        .logo {
          border-color: ${theme.colors.greylight};
          border-width: 1px;
          border-style: solid;
          margin-bottom: 6px;
          margin-top: 9px;
          height: 26px;
          width: 40px;
        }
        @media (min-width: ${theme.breakpoints.mdUp}) {
          .logo {
            height: 56px;
            margin-bottom: 10px;
            margin-top: 9px;
            width: 88px;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderLogo;
