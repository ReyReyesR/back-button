import React from 'react';
import HeaderNav from './HeaderNav';

export function HeaderNavLayout() {
  return (
    <div className="container">
      <div className="no-gutters">
        <div className="row align-items-center">
          <div className="col">
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavLayout;
