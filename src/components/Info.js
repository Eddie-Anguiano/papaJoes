import React, { Component } from "react";
import Map from "./Map";

export default class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="sticky">
          Due to Covid-19 restrictions the we are currently only open for pickup
          orders.
        </div>

        <div className="hours">
          <table className="hours-table">
            <tbody>
              <tr className="hours-row">
                <th className="hours-head">Hours</th>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Monday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Tuesday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Wednesday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Thursday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Friday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Saturday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
              <tr className="hours-row">
                <td className="hours-days">Sunday</td>
                <td className="hours-open">10:00am - 11:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Map />

        <div className="info-details">
          <div className="info-location">
            <h2 className="info-header">Location</h2>
            <p>13547 Telegraph Road</p>
            <p>Whittier Ca, 90605</p>
          </div>
          <div className="info-contact">
            <h2 className="info-header">Contact</h2>
            <table>
              <tr>
                <td>Phone:</td>
                <td>(562) 944-8803</td>
              </tr>
              <tr>
                <td>Fax:</td>
                <td>(562) 906-1095</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="map"></div>
      </section>
    );
  }
}
