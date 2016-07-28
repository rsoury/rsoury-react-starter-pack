import React from 'react';
//This is a stateless component.
const AboutPage = props => {
  return(
    <div>
      <h1>About</h1>
      <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      <p>You can find my bucket list for this boiler-plate below:</p>
      <ul className="bucketList">
        <li>Add Async Redux</li>
        <li>Add Stylus Setup</li>
        <li>Utilise Enzyme properly... thanks Airbnb.</li>
        <li>Finally develop a full fledged application with this stuff. I like when things move fast on my screen.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
