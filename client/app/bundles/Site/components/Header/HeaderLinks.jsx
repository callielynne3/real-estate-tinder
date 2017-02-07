import React from 'react';

const HeaderLinks = (props) => (
  <div>
    <a href="/profile">Profile</a>
    <br/>
    <a rel="nofollow" data-method="delete" href="/users/sign_out">Log Out</a>
  </div>
);

export default HeaderLinks;