import React from 'react';
import HeaderIcon from './HeaderIcon';

const HeaderButtons = () => {
  return (
    <>
      <HeaderIcon icon="location" isFirst={true}></HeaderIcon>
      <HeaderIcon icon="subscribe" isMobleHidden={true}></HeaderIcon>
      <HeaderIcon icon="login" isMobleHidden={true}></HeaderIcon>
      <HeaderIcon icon="basket" badgeContent="1"></HeaderIcon>
    </>
  );
};

export default HeaderButtons;
