import React from 'react';
import StaticPage from '../pages/page/[...slug]';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../providers/ThemeProvider';
import WowStoryRender, { Brands } from '../components/WowStoryRender';
import '../scss/custom.scss';

export default {
  title: 'Static Page',
  component: StaticPage,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const Options = () => {
  const theme = select(...Brands);

  const content = {
    'Need help': `<html>\r\n<head>\r\n<style type="text/css">\r\n\r\nh1{\r\ntext-align:center;\r\nbackground-image:url("") !important;\r\n}\r\n\r\nh2{\r\nfont-size:18px;\r\n}\r\n\r\n#faqBtn p, #contactBtn p, #howBtn p{\r\ncolor:#333 !important;\r\n}\r\n\r\n#faqBtn, #contactBtn, #howBtn{\r\ncolor:#333;\r\nbackground: #eee;\r\nwidth:100%;\r\nmargin:0 auto;\r\nheight:auto;\r\ntext-align:left;\r\ntext-decoration:none;\r\npadding:20px;\r\n}\r\n\r\n#faqBtn a, #contactBtn a, #howBtn a{\r\ncolor:#333 !important;\r\nfont-weight:bold;\r\n}\r\n\r\n</style>\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n<br>\r\n<div id="faqBtn" style="">\r\n<img src="https://static.wowcher.co.uk/binaries/question2.png" style="position:relative; float:right; height:110px; width:auto;">\r\n<h2>Frequently Asked Questions on COVID-19 Coronavirus</h2>\r\n<br>\r\n<p style="width:50%; height:auto">Questions about our response to the virus?</p>\r\n<br>\r\n<a href="https://help.wowcher.co.uk/knowledgebase/s/article/Coronavirus-COVID-19-Response">View Coronavirus FAQs >></a>\r\n</div>\r\n\r\n<br>\r\n\r\n\r\n<br>\r\n<div id="faqBtn" style="">\r\n<img src="https://static.wowcher.co.uk/binaries/question2.png" style="position:relative; float:right; height:110px; width:auto;">\r\n<h2>Frequently Asked Questions</h2>\r\n<br>\r\n<p style="width:50%; height:auto">In a pickle? Have a look through our Frequently Asked Questions to see if we already have an answer to your question.</p>\r\n<br>\r\n<a href="https://help.wowcher.co.uk/knowledgebase/s/">View FAQs >></a>\r\n</div>\r\n\r\n<br>\r\n\r\n<div id="contactBtn" style="">\r\n<img src="https://static.wowcher.co.uk/binaries/contact2.png" style="position:relative; float:right; height:110px; width:auto;">\r\n<h2>Contact Us</h2>\r\n<br>\r\n<p style="width:50%; height:auto">Still confused? No worries, our customer services team are on hand to answer your questions! Jot your query and email us using the link below. Don't forget to include your order number and a summary of your issue please.</p>\r\n<br>\r\n<a href="https://secure.wowcher.co.uk/myaccount/csform" target="_blank">Contact Us Now >></a>\r\n</div>\r\n\r\n</body>\r\n<footer>\r\n</footer>\r\n</html>`,
    'Work with us': `<script data-iframe='https://connect.studentbeans.com/v2/wowcher/uk' data-load='connect' id='stb_root' src='https://cdn.studentbeans.com/third-party/all.js'></script>`,
    'Refer a friend': `<div id='soretosharewidget'></div>\r\n<script>\r\n/*** SORETO TAG CONFIGURATION START ***/\r\nvar SORETO = {};\r\nSORETO.Client = {};\r\nSORETO.User = {};\r\n/*** Set your transaction parameters ***/\r\nSORETO.Client.id = '5d44042ec4068119875d05fc';\r\nSORETO.User.firstName = '';\r\nSORETO.User.email = '';\r\nSORETO.Widget = {};\r\nSORETO.Widget.showWidget = true;\r\nSORETO.Widget.widgetType = 'sharestaticpage';\r\n\r\n/*** Do not change ***/\r\n(function(d, s, id) {\r\nvar script, first_script = d.getElementsByTagName(s)[0];\r\nif (d.getElementById(id)) return;\r\nscript = d.createElement(s);\r\nscript.id = id;\r\nscript.src = "https://api.soreto.com/scripts/" + id + ".min.js"; first_script.parentNode.insertBefore(script, first_script);\r\n}(document, 'script', 'soreto'));\r\n</script>`,
  };
  const pageLabel = 'Page';
  const pageOptions = ['Need help', 'Work with us', 'Refer a friend'];
  const pageDefaultValue = 'Need help';
  const pageName = select(pageLabel, pageOptions, pageDefaultValue);

  return (
    <ThemeProvider value={theme}>
      <WowStoryRender>
        <StaticPage slug={content[pageName]} />
      </WowStoryRender>
    </ThemeProvider>
  );
};
