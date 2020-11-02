import React, { Component } from "react";

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
          </table>
        </div>
      </section>
    );
  }
}
