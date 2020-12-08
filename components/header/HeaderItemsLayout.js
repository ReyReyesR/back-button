import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';

export function HeaderItemsLayout() {
  return (
    <div className="container">
      <div className="no-gutters">
        <div className="row align-items-center">
          <div className="col-md-auto col-6">
            <HeaderLogo />
          </div>
          <div className="d-flex justify-content-end col-md-auto col-6 order-md-12">
            <HeaderButtons />
          </div>
          <div className="col-md order-md-1">
            <HeaderSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderItemsLayout;
