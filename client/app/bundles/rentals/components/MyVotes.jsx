import React from 'react';

export default class MyVotes extends React.Component {
  constructor(props) {
    super(props);
  }

  renderVotes() {
    return this.props.votes.map((vote) => {
      return (
        <div key={vote.id} className="five wide column">
          <div className="ui card">
            <div className="image">
              <img src="http://lorempixel.com/400/200/" />
            </div>
            <div className="content">
              <div className="header">{vote.rental.title}</div>
              <div className="meta">
                <a>{vote.rental.address}</a>
              </div>
              <div className="description">
                {vote.rental.property_type}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Posted by {vote.rental.rentor.email}
              </span>
              <span>
                <i className="user icon"></i>
                Posted on {vote.rental.created_at}
              </span>
            </div>
          </div>
        </div> 
      );
    });
  }

  render() {
    return (
      <div>
        <h1>My Favorites</h1>
        <div className="ui grid container stackable">
          {this.renderVotes()}
        </div>
      </div>
    );
  }
}