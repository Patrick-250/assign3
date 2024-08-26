import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="img">
        <img
          src="/images/avator.jpeg"
          alt=""
          style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        />
      </div>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="events">
          <table>
            <tr>
              <th>Month</th>
              <th>Day</th>
              <th>Time</th>
              <th>DMV staff</th>
            </tr>
            <tr>
              <td>Nov</td>
              <td>17</td>
              <td>5:00pm</td>
              <td>Peter Smith</td>
            </tr>
            <tr>
              <td>Nov</td>
              <td>18</td>
              <td>9:00pm</td>
              <td>Lucas Potter</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;