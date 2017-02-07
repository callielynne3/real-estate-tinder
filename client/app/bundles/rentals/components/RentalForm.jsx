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

      <div className="RentalFormContainer">
        <div className="ui container">

            <form action="/preview" method="post" className="ui big form">

                <div className="required field">
                  <label htmlFor="rental[title]">Title: </label>
                  <input type="text" name="rental[title]" />
                </div>

              <div className="fields">
                <div className="required eight wide field">
                  <label htmlFor="rental[address]">Address: </label>
                  <input type="text" name="rental[address]" />
                </div>

                <div className="three wide field">
                  <label htmlFor="rental[unit]">Unit: </label>
                  <input type="text" name="rental[unit]" />
                </div>
              </div>

                <div className="required field">
                  <label htmlFor="rental[price]">Price: </label>
                  <input type="number" name="rental[price]" min="0" />
                </div>

              <div className="fields">
                <div className="required field">
                  <label htmlFor="rental[beds]">Bedrooms: </label>
                  <input type="number" name="rental[beds]" min="0"/>
                </div>

                <div className="required field">
                  <label htmlFor="rental[baths]">Bathrooms: </label>
                  <input type="number" name="rental[baths]" min="0" />
                </div>
              </div>

                <div className="ui checkbox" id="checkbox">
                    <input type="Checkbox"  tabindex="0" name="rental[pets]" class="hidden"/>
                    <label htmlFor="rental[pets]">Pet Friendly</label>
                </div>

                <div className="field">
                  <label htmlFor="rental[parking]">Parking: </label>
                  <input type="text" name="rental[parking]" placeholder="Street parking, garage, etc." />
                </div>

                <div className="field">
                  <label htmlFor="rental[description]">Rental Description: </label>
                  <textarea name="rental[description]" placeholder="Describe your rental in detail."></textarea>
                </div>

                <div className="ui one column centered grid">
                  <div className="field form-submit-button">
                    <input type="submit" value="List My Rental" className="ui big button"/>
                  </div>
                </div>
            </form>

        </div>
      </div>
    )

  }
}

