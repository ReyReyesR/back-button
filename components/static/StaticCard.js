// Card component for static content
// In this version we don't use a spiner, because means to be SSR
// If exist, the Spinner will not be shown
/*
WARNING!!!

page is loading dinamically script code
for that reason we are using dangerously-set-html-content
but this is a dangeours technique 

The normal would be use dangerouslySetInnerHTML and not load external script

<div dangerouslySetInnerHTML={{ __html: content }} />

However, that would make some pages stopped to works, like "refer a friend"
*/
import React from 'react';
import '../../scss/components/panel.scss';
import '../../scss/components/staticcard.scss';

import InnerHTML from 'dangerously-set-html-content';

export default function StaticCard({ content }) {
  return (
    <div className="static">
      <div className="panel">
        <div className="static__content-container">
          <div className="static__content">
            <InnerHTML html={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
