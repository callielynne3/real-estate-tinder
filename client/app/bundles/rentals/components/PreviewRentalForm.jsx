import React from 'react';

export default class PreviewRentalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  renderPictures() {
    return this.props.pictures.map((picture) => {
      return (
        <div key={picture.file}>
          <img src={picture.url} />
        </div>
      );
    });
  }

  render() {
    return (

      <div className="previewRentalFormContainer">
        <div className="ui container">
          <form action="/rentals" method="post" className="ui big form" >

            <div className="field">
              <label htmlFor="rental[title]">Title: </label>
              <input
                type="text"
                name="rental[title]"
                id="preview-field"
                defaultValue={this.props.title}
              />
            </div>

            <div className="fields">
              <div className="eight wide field">
                <label htmlFor="rental[address]">Address: </label>
                <input
                  type="text"
                  name="rental[address]"
                  id="preview-field"
                  defaultValue={this.props.address}
                />
              </div>

              <div className="three wide field">
                <label htmlFor="rental[unit]">Unit: </label>
                <input
                  type="text"
                  name="rental[unit]"
                  id="preview-field"
                  defaultValue={this.props.unit}
                />
              </div>
            </div>

            <div className="five wide field">
              <label htmlFor="rental[property_type]">Type of place: </label>
              <input type="text" name="rental[property_type]" id="preview-field" placeholder="Apartment or room?" />
            </div>

            <div className="field">
              <label htmlFor="rental[price]">Price: </label>
              <input
                type="number"
                name="rental[price]"
                id="preview-field"
                defaultValue={this.props.price}
                min="0"
              />
            </div>

            <div className="fields">
              <div className="field">
                <label htmlFor="rental[beds]">Bedrooms: </label>
                <input
                  type="number"
                  name="rental[beds]"
                  id="preview-field"
                  defaultValue={this.props.beds}
                  min="0"
                />
              </div>

              <div className="field">
                <label htmlFor="rental[baths]">Bathrooms: </label>
                <input
                  type="number"
                  name="rental[baths]"
                  id="preview-field"
                  defaultValue={this.props.baths}
                  min="0"
                />
              </div>
            </div>

            <div className="ui checkbox" id="checkbox">
              <input
                  type="Checkbox"
                  tabIndex="0"
                  name="rental[pets]"
                  className="hidden"
                  defaultValue={this.props.pets}
                />
              <label htmlFor="rental[pets]">
               Pet Friendly
              </label>
            </div>

            <div className="field">
              <label htmlFor="rental[parking]">Parking: </label>
              <input
                type="text"
                name="rental[parking]"
                id="preview-field"
                defaultValue={this.props.parking}
              />
            </div>

            <div className="field">
              <label htmlFor="rental[description]">Rental Description: </label>
              <textarea
                name="rental[description]"
                id="preview-field"
                defaultValue={this.props.description}>
              </textarea>
            </div>

            <div className="field">
              <label htmlFor="rental[pictures]">Pictures: </label>
              {this.renderPictures()}
              <label htmlFor="rental_remove_pictures"></label>
              <input name="rental[remove_pictures]" type="hidden" value="0" />
              <input type="checkbox" value="1" name="rental[remove_pictures]" />
              <input type="file" name="rental[pictures][]" multiple />
              <input type="hidden" name="rental[pictures_cache]" defaultValue={this.props.pictures} />
            </div>

            <div className="field form-submit-button">
              <input
                type="submit"
                value="Yes, everything looks good!"
                className="ui big button"/>
            </div>

          </form>
        </div>
      </div>
    )

  }
}