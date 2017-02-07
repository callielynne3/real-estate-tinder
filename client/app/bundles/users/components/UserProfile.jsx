import React, { PropTypes } from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email
    };
  }

  render() {
    return (
      <div className="userProfileContainer">
        <div className="box">
          <p>{this.state.email}</p>
        </div>
      </div>
    )
  }
}

UserProfile.propTypes = {
  email: PropTypes.string.isRequired
};

// import React, { PropTypes } from 'react';

// const UserProfile = ({ email }) => (
//   <div>
//     <h3>
//       Hello, {email}!
//     </h3>
//   </div>
// );

// UserProfile.propTypes = {
//   email: PropTypes.string.isRequired
// };

// export default UserProfile;

