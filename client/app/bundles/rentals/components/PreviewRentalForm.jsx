import React from 'react';

export default class PreviewRentalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  render() {
    return (
      <div className="previewRentalFormContainer">
        <form action="/rentals" method="post" >

        <div className="field">
          <label htmlFor="rental[title]">Title: </label>
          <input
            type="text"
            name="rental[title]"
            defaultValue={this.props.title}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[address]">Address: </label>
          <input
            type="text"
            name="rental[address]"
            defaultValue={this.props.address}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[unit]">Unit: </label>
          <input
            type="text"
            name="rental[unit]"
            defaultValue={this.props.unit}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[price]">Price: </label>
          <input
            type="number"
            name="rental[price]"
            defaultValue={this.props.price}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[beds]">Bedrooms: </label>
          <input
            type="number"
            name="rental[beds]"
            defaultValue={this.props.beds}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[baths]">Bathrooms: </label>
          <input
            type="number"
            name="rental[baths]"
            defaultValue={this.props.baths}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[pets]">
            <input
              type="Checkbox"
              name="rental[pets]"
              defaultValue={this.props.pets}
            /> Pet Friendly
          </label>
        </div>

        <div className="field">
          <label htmlFor="rental[parking]">Parking: </label>
          <input
            type="text"
            name="rental[parking]"
            defaultValue={this.props.parking}
          />
        </div>

        <div className="field">
          <label htmlFor="rental[description]">Rental Description: </label>
          <textarea name="rental[description]" defaultValue="Describe your rental in detail."></textarea>
        </div>

        <div className="field">
          <input type="submit" value="List My Rental" className="ui button"/>
        </div>

        </form>

      </div>
    )

  }
}




