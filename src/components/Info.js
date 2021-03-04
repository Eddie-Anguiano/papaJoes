import React, { Component } from "react";
import Map from "./Map";

export default class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="sticky">
          Due to Covid-19 restrictions the we are currently open only for pickup
          orders.
        </div>

        <div className="hours">
          <h2 className="hours-header">Hours</h2>
          <div className="hours-time">
            Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Wednesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 11:30pm
          </div>
          <div className="hours-time">
            Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
            - 10:00pm
          </div>
        </div>

        <div className="contact-container">
          <Map />

          <div className="info-details">
            <div className="info-location">
              <h2 className="info-header">Location</h2>
              <div className="info-address">13547 Telegraph Road</div>
              <div className="info-addressTwo">Whittier Ca, 90605</div>
            </div>
            <div className="info-contact">
              <h2 className="info-header">Contact</h2>
              <div className="info-telephone">Phone: (562) 944-8803</div>
              <div className="info-telephone">Fax: (562) 944-8803</div>
              <div className="info-telephone">
                email: pizza.mainia@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
