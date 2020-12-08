import React from 'react';

export default function Custom404() {
  return (
    <>
      <div ui-view="" className="">
        <div className="not-found">
          <div className="not-found__content">
            <h2 className="not-found__title">
              404 - seriously, so embarrassing.
            </h2>
            <p className="not-found__message">
              Looks like the page you are looking for is temporarily
              unavailable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
