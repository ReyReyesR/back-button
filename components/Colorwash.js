import React, { useContext } from 'react';
import ThemeContext from '../providers/ThemeProvider';

const Colorwash = () => {
  const theme = useContext(ThemeContext);
  if (!theme.images.bgcolorwash) return null;
  return (
    <div className="app__colourwash">
      <style jsx>{`
        .app__colourwash {
          background-image: url(${theme.images.bgcolorwash});
        }
      `}</style>
    </div>
  );
};

export default Colorwash;
