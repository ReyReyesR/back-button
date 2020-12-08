import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeProvider';

const HeaderSearch = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <input className="input" type="text"></input>
      <style jsx>{`
        .input {
          border-color: ${theme.colors.greylight};
          border-width: 1px;
          border-style: solid;
          border-radius: 25px;
          height: 33px;
          margin-bottom: 5px;
          padding: 0 45px 0 8px;
          width: 100%;
        }
        @media (min-width: ${theme.breakpoints.mdUp}) {
          .input {
            height: 40px;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderSearch;
