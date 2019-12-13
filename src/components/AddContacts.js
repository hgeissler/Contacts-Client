import React, {Component} from 'react';

export default class AddContacts extends Component {

  render() {
    return(
      <div class="row">
        <form class="col s12" onSubmit={this.submitContact.bind(this)}>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Placeholder" ref="first_name" type="text" class="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input ref="last_name" type="text" class="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input ref="email" type="email" class="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div class="row">
            <button 
              className="waves-effect waves-light btn" 
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>
      </div> 
    )
  }
}