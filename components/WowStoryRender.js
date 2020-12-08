/* Helper for rendering Storybook stories consistently */
import React, { useContext } from 'react';
import ThemeContext from '../providers/ThemeProvider';
import themes from '../config/themes/themes';

const WowStoryRender = ({ isPadded, children }) => {
  const theme = useContext(ThemeContext);
  const fontsClass = theme.fonts.theme
    ? `${theme.fonts.theme}, ${theme.fonts.base}`
    : `${theme.fonts.base}`;
  let className = 'dummy-body';
  if (isPadded) className = className + ' padded';

  return (
    <div className={className}>
      {children}
      <style jsx>{`
        .dummy-body {
          background-color: ${theme.colors.background};
          font-family: ${fontsClass};
        }
        .padded {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

const BrandsArray = [themes.wowcher, themes.livingsocial];
const Brands = ['Themes', BrandsArray, BrandsArray[0]];

const BrandsPlusArray = [themes.wowcher, themes.livingsocial, themes.vip];
const BrandsPlus = ['Themes', BrandsPlusArray, BrandsPlusArray[0]];

export { WowStoryRender as default, Brands, BrandsPlus };
