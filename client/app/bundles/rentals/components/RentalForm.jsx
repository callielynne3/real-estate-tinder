import React from 'react';

export default class RentalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }


  render() {
    return (

      <div className="rentalFormContainer">
        <form>
          <label for="title">Title: </label>
          <input type="text" />

          <label for="whatever">Title: </label>
          <input type="text" />
        </form>

      </div>
    )

  }
}

